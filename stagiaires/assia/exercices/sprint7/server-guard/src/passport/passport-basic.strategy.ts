import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { BasicStrategy } from 'passport-http';
import { AuthService } from "src/modules/auth/auth.service";
import { UsersEntity } from "src/modules/user/entities/users.entity";


@Injectable()
export class PassportBasicStrategy extends PassportStrategy(BasicStrategy) {
    constructor(
        private authService: AuthService,
        ){
        super({ session: false });
    }

    async validate(login: string, password: string): Promise<UsersEntity> {
        const user = await this.authService.checkUser(login, password);
        return user;
    }

}
