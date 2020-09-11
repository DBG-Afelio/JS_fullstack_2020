import { Controller, Get, Param, Post, Body, ParseIntPipe, HttpStatus, ValidationPipe, UsePipes, Patch, Put, Delete, Query, } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/models/user.model';
import { User_Dto } from 'src/dtos/User_Dto';
import { CreateUser_Dto } from 'src/dtos/CreateUser_Dto';
import { UpdateUser_Dto } from 'src/dtos/UpdateUser_Dto';
import { json } from 'express';
import { GetUserFiltersDto } from 'src/dtos/GetUserFiltersDto';


@Controller('users') // a l'ecoute du localhost:3000/users
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    
    @Get()
    @UsePipes(ValidationPipe)
    getUserList(
        @Query() myFilters: GetUserFiltersDto
    ): Promise<User_Dto[]> {
        console.log('my filters : ', myFilters);

        if(Object.keys(myFilters).length){
            return this.usersService.getFiltered(myFilters)
                .then((userList: User[]) => userList.map((user: User) => user.toDto()))
                .catch(error => {
                    throw new Error(error)
                });
        } else {
            return this.usersService.getAll()
            .then((userList: User[]) => userList.map((user: User) => user.toDto()))
            .catch(error => {
                throw new Error(error)
            });
        }
    }

    @Get(':id')
    getUserById(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode : HttpStatus.NOT_FOUND})) id:number): Promise<User_Dto> {
        return this.usersService.getById(id)
            .then((user: User) => user.toDto())
            .catch(error => {
                throw new Error(error);
            });
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() newUser: CreateUser_Dto): Promise<User_Dto> {
        return this.usersService.create(newUser)
            .then((user: User) => user.toDto())
            .catch(error => {
                throw new Error(error);
            });
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    updateUser(@Body() userToUpdate: UpdateUser_Dto): Promise<User_Dto> {
        return this.usersService.update(userToUpdate)
            .then((user: User) => user.toDto())
            .catch(error => {
                throw new Error(error);
            });
    }

    @Delete(':id')
    deleteUser(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id): void {
        this.usersService.delete(id)
            .then()
            .catch(error => {
                throw new Error(error);
            });
    }
    
}

