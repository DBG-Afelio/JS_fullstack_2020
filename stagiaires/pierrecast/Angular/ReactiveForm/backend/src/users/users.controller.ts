import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/userDto';

// localhost:3000/users
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get(':id') 
    public async findOne(@Param('id') id: string) {
        return this.usersService.findOne(id).then(user => user.toDto());
    }

    @Get()
    public async findAll(): Promise<UserDto[]> {
        return this.usersService.findAll().then(users => users.map(user => user.toDto()));
    }

    @Post()
    public async createUser(@Body() newUser: CreateUserDto) {
        console.log('newUser', newUser);
        this.usersService.create(newUser);
    }

    @Patch(':id')
    public async updateUser(@Param('id') id: string, @Body() user: CreateUserDto) {
        return this.usersService.update(id, user);
    }

    @Delete(':id') 
    public async deleteToDo(@Param('id') id: string) {
        return this.usersService.delete(id);
    }
}

