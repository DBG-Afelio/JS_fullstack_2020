import { Controller, Get, Query, Param, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './models/users-dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}

@Get()
    public getAllUsers(@Query() queries){
        console.log(queries)
        if(queries.country){

            this.usersService.getUserByCountry(queries.country)

        }
        return this.usersService.getAllUsers()

    }


@Get('/:userId')
    public getUserById(@Param() param){

        return this.usersService.getUserById(Number(param.userId))

    }

@Post()
@UsePipes(ValidationPipe)
    public createUser(@Body() body:UsersDto){
        return this.usersService.createUser(body)

    }

}