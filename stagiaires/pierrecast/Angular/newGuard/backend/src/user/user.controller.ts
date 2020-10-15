import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorators';
import { User } from 'src/decorators/user.decorators';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/role.guards';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserGoogleDto } from './dtos/user-google.dto';
import { UserSubscribeDto } from './dtos/userSubscribeDto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController {
 
    constructor(
        private userService: UserService
    ) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('USER', 'AUTHOR', 'ADMIN')
    @Get('mes-acces')
    async getMyUserProfile(
        @User() user: any
       
    ): Promise<UserEntity[]> {
        return await this.userService.getMyUserProfile(user.id);
    }

    @Get('free')
    async getFreeUsers(): Promise<UserEntity[]> {
        return await this.userService.getFreeUsers();
    }

    @Get(':id')
    async getUserById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<UserEntity> {
        return await this.userService.getUserById(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN') 
    @Get()
    async getAllUser(): Promise<UserEntity[]> {
        return await this.userService.getAllUser();
    }

    @Post('register')
    async addUser(
       @Body() addUserDto: UserSubscribeDto
    ): Promise<UserEntity> {
        return await this.userService.subscribe(addUserDto);
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
