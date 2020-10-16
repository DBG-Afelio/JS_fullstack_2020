import {
  BadRequestException,
  HttpService,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Payload } from 'src/interfaces/payload';
import { UsersEntity } from '../user/entities/users.entity';
import { UserService } from '../user/user.service';
import {
  CreateCredentialsDto,
  CreateUserDto,
} from '../user/dto/create-user-dto';
import { GoogleInfo } from 'src/interfaces/googleInfo';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepo: Repository<UsersEntity>,
    private userService: UserService,
    private jwtService: JwtService,
    private http: HttpService,
  ) {}

  async googleAuth(googleInfo: GoogleInfo): Promise<UsersEntity> {
    //check whether google user is in DB
    console.log('check if in DB');
    let userFound: UsersEntity = (await this.userService.getAll()).find(
      (userScreened: UsersEntity) =>
        userScreened.googleId === googleInfo.googleId ||
        userScreened.email === googleInfo.email,
    );

    //if not, register user
    if (!userFound) {
      console.log('google user not in db yet');
      const newUser: CreateUserDto = {
        googleId: googleInfo.googleId,
        googleToken: googleInfo.googleToken,
        email: googleInfo.email,
        firstName: googleInfo.firstName,
        familyName: googleInfo.lastName,
      };
      userFound = await this.usersRepo.save(newUser).catch((error: any) => {
        throw new BadRequestException(error.message, error.name);
      });
    } else {
      userFound.googleToken = googleInfo.googleToken;
      userFound = await this.userService.update(userFound.id, userFound);
    }
    console.log('google user registered in db');
    return userFound;
  }

  async register(credentials: CreateCredentialsDto): Promise<UsersEntity> {
    let newUser: CreateUserDto = {
      ...credentials,
      login: credentials.login,
      _password: await bcrypt.hash(credentials._password, 10),
    };
    return await this.usersRepo.save(newUser).catch((error: any) => {
      throw new BadRequestException(error.message, error.name);
    });
  }

  async checkUser(login: string, password: string): Promise<UsersEntity> {
    let expectedUser: UsersEntity;
    try {
      expectedUser = await this.userService.findByLogin(login);
      const match = await bcrypt.compare(password, expectedUser._password);
      if (!match) {
        throw new UnauthorizedException('Wrong login/password');
      }
    } catch {
      throw new UnauthorizedException('Wrong login/password');
    }
    return expectedUser;
  }

  async generateToken(user: UsersEntity): Promise<{ access_token: string }> {
    console.log('generating JWT...');
    const payload: Payload = {
      login: user.login,
      id: user.id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async revokeGoogleToken(userId: number) {
    const foundUser = await this.userService.getOne(userId);
    if (foundUser && foundUser.googleToken.length > 0) {
      return this.http
        .post('https://oauth2.googleapis.com/revoke', {
          token: foundUser.googleToken.trim(),
        })
        .pipe(
          map(async () => {
            foundUser.googleToken = '';
            await this.userService.update(foundUser.id, foundUser);
            return { revoke_Googletoken: 'success' };
          }),
          catchError(() => {
            throw new NotFoundException(`Error Revoking Google token`);
          }),
        );
    } else {
      throw new NotFoundException(`Error Revoking Google token`);
    }
  }
}
