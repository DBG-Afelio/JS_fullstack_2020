import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Payload } from 'src/interfaces/payload';
import { UsersEntity } from '../user/entities/users.entity';
import { UserService } from '../user/user.service';
import { CreateCredentialsDto, CreateUserDto } from '../user/dto/create-user-dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepo: Repository<UsersEntity>,
        private userService: UserService,
        private jwtService: JwtService,
    ){}

    async register(credentials: CreateCredentialsDto): Promise<UsersEntity> {
        let newUser: CreateUserDto = {
            ...credentials,
            login: credentials.login,
            _password: await bcrypt.hash(credentials._password, 10)
        };
        return await this.usersRepo.save(newUser)
            .catch((error: any) => {
                throw new BadRequestException(error.message, error.name);
          }
        );
    }

    // async register(credentials: CreateCredentialsDto): Promise<UsersEntity> {
    //     let newUser = new User(
    //         credentials.login,
    //         await bcrypt.hash(credentials._password, 10)
    //     );
    //     return await this.usersRepo.save(newUser.toDto())
    //       .catch((error) => {
    //         throw new BadRequestException(error.message, error.name);
    //       }
    //     );
    // }

    async checkUser(login: string, password: string): Promise<UsersEntity> {
        let expectedUser: UsersEntity ;
        try {
            expectedUser = await this.userService.findByLogin(login);
            const match = await bcrypt.compare(password,expectedUser._password);
            if (!match){
                throw new UnauthorizedException('Wrong login/password');
            } 
        } catch {
            throw new UnauthorizedException('Wrong login/password');
        }
        return expectedUser;
       
    }

    async generateToken(user: UsersEntity): Promise<{ access_token: string}> {
        const payload: Payload = { login: user.login, id: user.id, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }


}
