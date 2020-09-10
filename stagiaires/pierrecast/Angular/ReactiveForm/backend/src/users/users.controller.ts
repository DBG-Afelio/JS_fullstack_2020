import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe, HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/userDto';
import { UserCompleteDto } from './dtos/userCompleteDto';
import { Sex } from './models/sex.enum';

// localhost:3000/users
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get(':id') 
    public async findOne(@Param('id', new ParseIntPipe(
        { errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: string) {
        return this.usersService.findOne(id).then(user => user.toDto());
    }

    @Get()
    public async findAll(
        @Query('_embed') embeddedRessource: string, 
        @Query('sex') sex :Sex, 
        @Query('roles') roles: string
        ): Promise<UserDto[]|UserCompleteDto[]> {
        if (embeddedRessource && embeddedRessource === 'roles') {
           /* if (roles) {
                const tab_roles = roles.split(',');
                console.log(tab_roles);
                return this.usersService
                        .getUsersWithRoles()
                        .then(users => users.filter(user => {
                            user.roles.some(role => {

                            })
                        })
                        .map(user => user.toDto()));
            }*/
            
            return this.usersService.getUsersWithRoles().then(users => users.map(user => user.toDto()));
        } else if (sex) {
            return this.usersService
                    .findAll()
                    .then(users => users
                        .filter(user => user.sex === sex)
                        .map(user => user.toDto())
                    );
        }
        return this.usersService.findAll().then(users => users.map(user => user.toDto()));
    }

    @Post()
    public async createUser(@Body() newUser: CreateUserDto) {
        console.log('newUser', newUser);
        this.usersService.create(newUser);
    }

    @Patch(':id')
    public async updateUser(@Param('id', ParseIntPipe) id: string, @Body() user: CreateUserDto) {
        return this.usersService.update(id, user);
    }

    @Delete(':id') 
    public async deleteToDo(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.delete(id);
    }
}

