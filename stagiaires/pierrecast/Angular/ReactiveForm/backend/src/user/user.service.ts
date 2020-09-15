import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
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

    async getAllNationalities(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async getUserById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne(id);
    }

    async addUser(user: AddUserDto): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }

    async updateUser(id: number, user: UpdateUserDto): Promise<UserEntity> {
        const newUser = await this.userRepository.preload({
            id,
            ...user
        });
        if (!newUser) {
            throw new NotFoundException(`Nationalité ${id} inexistante`);
        }
        return await this.userRepository.save(newUser);

    }

    async removeUser(id:number) {
        const userToRemove = await this.userRepository.findOne(id);
        if (!userToRemove) {
            throw new NotFoundException(`Nationalité ${id} inexistante`);
        }
        this.userRepository.remove(userToRemove)
    }
    
}
