import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt'

@Injectable()
export class AuthService {
    users : UserEntity[] = [];

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string) {
        const user = await this.userService.getUserByName(username);
          
        if (!user) {
            throw new UnauthorizedException();
        }
        const valid = await compare(password, user.password);
        
        if (!valid) {
            throw new UnauthorizedException();
        }
        return user;
    }

    // login
    async login(user: UserEntity) {   
        const payload = { 
            id : user.id, 
            username : user.username, 
            roles : user.roles,
            email: user.email
        }
        const jwt = await this.jwtService.sign(payload)
        return {
            "access_token" : jwt
        }
    }   
    
    async validateGoogleUser(googleId: string) {
        return await this.userService.getUserByGoogleId(googleId);
    }
}
