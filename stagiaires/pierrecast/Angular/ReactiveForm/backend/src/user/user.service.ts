import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NationalityEntity } from "src/nationality/entities/nationality.entity";
import { Repository } from "typeorm";
import { AddUserDto } from "./dto/add-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository : Repository<UserEntity>
       
    ) {

    }

    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async getUserById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne(id);
    }

    async addUser(user: AddUserDto): Promise<UserEntity> {
        return await this.userRepository.save({
            ...user, 
            nationality:{id:user.nationalityId}
        });
    }

    async updateUser(id: number, user: UpdateUserDto): Promise<UserEntity> {
        
        const newUser = await this.userRepository.preload({
            id,
            ...user, 
            nationality:{id:user.nationalityId}
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
    
}
