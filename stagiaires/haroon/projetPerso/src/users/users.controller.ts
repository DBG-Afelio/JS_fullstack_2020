import { Controller} from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
constructor( private readonly userService : UsersService){}

}
/*
    constructor(private readonly userService : UsersService){}
    
    @Get()
    getAllUsers(): Promise<UserEntity[]> {
        return this.userService.getAllUsers();
    }
    @Get(':id')
    async getUserById(
        @Param('id', ParseIntPipe)id:number) :Promise<UserEntity>{
        return await this.userService.getUserById(id)   
  }
    @Post()
    async addUser(@Body() userDto: UserDto): Promise<UserEntity> {
        console.log(userDto);
        return await this.userService.addUser(userDto);


    }
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
    @Patch(':id')
    async updateUser(
    @Body() updateUser:UserDto,
    @Param('id',ParseIntPipe)id:number){
        return await this.userService.updateUser(id , updateUser );
    }
    */