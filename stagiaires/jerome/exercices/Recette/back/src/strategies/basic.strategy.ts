import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport/dist/passport/passport.strategy";

import { BasicStrategy } from 'passport-http';
import { AuthenticationService } from "src/authentication/authentication.service";

@Injectable()
export class Basic extends PassportStrategy(BasicStrategy)  {
    constructor(private authService:AuthenticationService){
        super({
            session: false});
    }
    async validate(login:string,password:string){
        return await this.authService.validateUser(login,password)
    }
}