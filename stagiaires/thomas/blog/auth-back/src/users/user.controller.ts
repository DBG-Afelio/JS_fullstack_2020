import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import passport from "passport";
import { Roles } from "src/decorators/roles.decorator";
import { User } from "src/decorators/user.decorator";
import { UserRoleEnum } from "src/enums/user-role.enum";
import { Repository } from "typeorm";
import { AddUserDto } from "./dto/add-user-dto";
import { BasicAuthDto } from "./dto/basic-auth.dto";
import { LoginCredentialsDto } from "./dto/login-credentials.dto";
import { UserSubscribeDto } from "./dto/user-subscribe.dto";
import { UserEntity } from "./entity/user.entity";
import { BasicAuthGuard } from "./guards/basic.guard";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(
        
        private userService: UserService
    ) {}


    // BASIC 

    // Login Basic

    @Get('list')
    async getAllUsers() {
       return await this.userService.getUsers();
   }

    @Post('classic-register')
    // @UseGuards(BasicAuthGuard)
    async addUser(@Body() user: AddUserDto) {
       return await this.userService.registerClassic(user);
   }  


    @Get('auth/login-basic')
    @UseGuards(BasicAuthGuard)
    async login(@User() user) {
        return await this.userService.loginJWT(user);
    }


   /* -------------------------------------------------------------- */ 

    // JWT 

    @Get('user-jwt')

     // TODO: Proteger via Guards (JWT Valide)

     /* @UseGuards(JwtAuthGuard)
     @Roles(UserRoleEnum.ADMIN)
    async getAllUsers() {
        return await this.userService.getUsers();
    } @*/ 

    @Post('register')
    @Roles(UserRoleEnum.ADMIN, UserRoleEnum.USER)
    async register(@Body() userData: UserSubscribeDto): Promise<Partial<UserEntity>>  {
        return await this.userService.register(userData);
    }

      // Login JWT
     /*  @Post('login-jwt')
      @UseGuards()
      @Roles(UserRoleEnum.ADMIN, UserRoleEnum.USER, UserRoleEnum.INVITE)
      async loginJWT(@Body() credentials: LoginCredentialsDto){
          return await this.userService.loginJWT(credentials);
      } */ 

}