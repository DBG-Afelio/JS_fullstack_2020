import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { BasicStrategy } from 'passport-http'
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class BasicStrat extends PassportStrategy(BasicStrategy) {
    constructor(
        private authService: AuthService
    ) {
        super({ session: false });
    }

    async validate(username: string, password: string) {
        const user = await this.authService.validateUser(username, password);
        return user;
    }
}