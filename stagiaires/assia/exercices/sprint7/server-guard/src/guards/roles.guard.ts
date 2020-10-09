import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Payload } from "src/interfaces/payload";
import { RolesEnum } from "src/enum/roles.enum";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        ){}

    canActivate(
        context: ExecutionContext,
    ): boolean {

        const authorizedRoles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!authorizedRoles) {
            console.log('----------No restriction on this route');
            return true;
        }
        console.log('-----------Route restricted');
        // console.log('Roles :', RolesEnum.MASTER);
        const request = context.switchToHttp().getRequest();
        
        console.log('userPayload : ', request.user);
        const payload: Payload = request.user; 
        return authorizedRoles.includes(payload.role);
    }
}












       // console.log('req.user : ', request);
        // const nakedBearerToken = request.headers.authorization.split(' ')[1]; // without 'Bearer '
        // const decodToken: { username: string, sub: number, iat: number, exp: number } = jwt_decode(nakedBearerToken);
        // const userId: number = decodToken.sub;

        // const user: UsersEntity = await this.usersService.getOne(userId);