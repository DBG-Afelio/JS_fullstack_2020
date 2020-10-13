import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { UserDto } from './userDto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity)
    private userRepositry  :  Repository<UserEntity> ){ 
    }
    async getAllUsers(): Promise<UserEntity[]>{
        return await this.userRepositry.find();
    }
    async getUserById(id: number ) : Promise<UserEntity>  {
        return await this.userRepositry.findOne(id)
    }
    async deleteUser(id : number) {
        const user = await this.userRepositry.findOne(id);
        return await this.userRepositry.remove(user)
    }
    async addUser(userDto : UserDto) {
        return await this.userRepositry.save(userDto) ;
    }
    async updateUser(id : number , user : UserDto ){
        const  updateUser = await this.userRepositry.preload({  // With (preload) We will get the role using it's id and then update  it  
        id ,
        ...user  
      })//verifying whether the role we are targeting exist or not
            if(!updateUser){
                throw new NotFoundException(`Le user avece le id :${id} n'existe pas `);
    }
        return await this.userRepositry.save(updateUser);
    } 
    
}
