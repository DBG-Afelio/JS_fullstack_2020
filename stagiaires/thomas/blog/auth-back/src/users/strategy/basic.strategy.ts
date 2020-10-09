import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user.service';
import { LoginCredentialsDto } from '../dto/login-credentials.dto';

@Injectable()
export class Basic extends PassportStrategy(BasicStrategy) {
  constructor(private userService: UserService) {
    super({ session: false });
  }
  async validate(username, password) {
    const user = await this.userService.validateUser(username, password);
    if (!user) {
      throw new HttpException('Non authorisé', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}