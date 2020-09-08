import { Controller, Get, Query, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}

@Get()
    public getAllUsers(){

        return this.usersService.getAllUsers()

    }

@Get('/:userId')
    public getUserById(@Param() param){
        return this.usersService.getUserById(Number(param.userId))

    }

@Post()
    public createUser(){

        return this.usersService.createUser()

    }

}