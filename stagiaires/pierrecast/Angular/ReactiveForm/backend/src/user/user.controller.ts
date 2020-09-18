import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseInterceptors } from '@nestjs/common';
import { AddUserDto } from './dto/add-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {

    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    async getUserById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<UserEntity> {
        return await this.userService.getUserById(id);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userService.getAllUsers();
    }

    @Post()
    async addUser(
       @Body() addUserDto: AddUserDto
    ): Promise<UserEntity> {
        return await this.userService.addUser(addUserDto);
    }

    @Patch(':id')
    async updateUser(
       @Body() updateUserDto: UpdateUserDto,
       @Param('id', ParseIntPipe) id :number
    ): Promise<UserEntity> {
        return await this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async removeUser(
        @Param('id', ParseIntPipe) id :number
    ) {
        return this.userService.removeUser(id);
    }
}
