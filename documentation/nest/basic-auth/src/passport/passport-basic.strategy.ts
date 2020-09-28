import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class Basic extends PassportStrategy(BasicStrategy) {
  constructor(private authService: AuthService) {
    super({ session: false });
  }
  async validate(username: string, password: string) {
    const user = await this.authService.validateUser(username, password);
    return user;
  }
}
