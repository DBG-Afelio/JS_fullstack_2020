
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from 'src/modules/auth/constants';
import { UsersEntity } from 'src/modules/user/entities/users.entity';
import { Payload } from 'src/interfaces/payload';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, //set to false
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: Payload) {
    console.log('payload validate in Jwt.Strategy : ', payload);
    return payload;
  }

  // async validate(payload: UsersEntity) {
  //   console.log('payload validate in Jwt.Strategy : ', payload);

  //   return payload;
  // }
}