
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PayloadInterface } from 'src/interfaces/payload.interface';
import * as dotenv from 'dotenv'
import { UserService } from 'src/user/user.service';

dotenv.config();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
      private userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: PayloadInterface) {
    // récupération du user
    const user = await this.userService.getUserByName(payload.username)
    
    // si User exist => retourne vers validate
    if (user) {
        const { password, ...result } = user
        return result;
    } else {
        throw new UnauthorizedException();
    }
  }
}