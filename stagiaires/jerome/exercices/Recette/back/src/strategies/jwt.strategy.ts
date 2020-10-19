import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../authentication/constant';

@Injectable()
export class Jwt extends PassportStrategy(Strategy)  {
        constructor(){
            super({jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: true,
                secretOrKey: jwtConstants.secret,
                session: false});
        }
        async validate(payload:any){
            return {userid:payload.sub, userLogin: payload.userLogin, userRole: payload.userRole}
        }
}