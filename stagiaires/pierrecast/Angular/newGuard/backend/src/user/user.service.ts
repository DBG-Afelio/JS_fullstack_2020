import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserSubscribeDto } from './dtos/userSubscribeDto';
import { UserGoogleDto } from './dtos/user-google.dto';
import { UserEntity } from './entities/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository : Repository<UserEntity>
    ) {

    }

    async getAllUser(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async getFreeUsers(): Promise<UserEntity[]> {
        return await this.userRepository.query(`
            SELECT * FROM public."user"
            WHERE id NOT IN (
                SELECT u.id FROM public."user" as u 
                INNER JOIN "author" a  ON a."userId" = u.id
            )
        `);
    }

    async getMyUserProfile(id: number): Promise<UserEntity[]> {
        return await this.userRepository.find({ 
            where: { "id" : id}
        });
    }

    async getUserById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne(id);
    }

    async getUserByName(username: string): Promise<UserEntity> {
        return await this.userRepository.findOne({username});
    }

    async getUserByGoogleId(google: string): Promise<UserEntity> {
        return await this.userRepository.findOne({google});
    }

    async updateUser(id: number, user: UpdateUserDto): Promise<UserEntity> {
     
        if (user.password ) {
             user.password = await hash(user.password, 10)
        } 

        const newUser = await this.userRepository.preload({
            id,
            ...user
        });
        
        if (!newUser) {
            throw new NotFoundException(`User ${id} inexistant`);
        }
        return await this.userRepository.save(newUser);

    }

    async removeUser(id:number) {
        const userToRemove = await this.userRepository.findOne(id);
        if (!userToRemove) {
            throw new NotFoundException(`User ${id} inexistant`);
        }
        this.userRepository.remove(userToRemove)
    }

    

    //créer un compte
    async subscribe(userData: UserSubscribeDto) {
        const user = this.userRepository.create({
            ...userData
        });
        user.password = await hash(user.password, 10)

        try  {
           let createdUser = await this.userRepository.save(user);
           delete createdUser.password;
           return createdUser;
        } catch (e) {
            throw new ConflictException(`le Username et le Password doivent être unique`)
        } 
    }

    async subscribeByGoogle(userData: UserGoogleDto) {
        const user = this.userRepository.create({
            ...userData
        });
        console.log('user back' , user)
        try  {
           let createdUser = await this.userRepository.save(user);
           return createdUser;
        } catch (e) {
            console.log('error', e)
            throw new ConflictException(`GoogleId inexistant`)
        } 
    }
}
