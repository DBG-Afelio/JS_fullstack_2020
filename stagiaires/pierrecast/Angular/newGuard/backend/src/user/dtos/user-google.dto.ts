import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { UserRoleEnum } from "../entities/user-role.enum";

export class UserGoogleDto {
    @IsOptional()
    @IsNumber()
    id: number;
    
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    roles: UserRoleEnum; 

    @IsOptional()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    google: string;

    constructor( userData:{ username: string, roles: UserRoleEnum, email: string, google:string })  {
        this.username = userData.username;
        this.roles = userData.roles;
        this.email = userData.email;
        this.google = userData.google;
    }
}
