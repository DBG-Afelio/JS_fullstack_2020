import { Controller, Get, Next } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/models/user.model';
import { User_Dto } from 'src/dtos/User_Dto';


@Controller('users') // a l'ecoute du localhost:3000/users
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    
    @Get()
    async getUserList(): Promise<User_Dto[]> {
        const value = await this.usersService.getUserList()
            .then((userList: User[]) => userList.map((user: User) => user.toDto()))
            .catch(error => {
                
                throw new Error(error)
            });
        return value;
    }
}

