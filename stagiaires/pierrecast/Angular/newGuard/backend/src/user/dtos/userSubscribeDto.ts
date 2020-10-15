import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { UserRoleEnum } from "../entities/user-role.enum";

export class UserSubscribeDto {
    @IsOptional()
    @IsNumber()
    id: number;
    
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;  

    @IsNotEmpty()
    @IsString()
    roles: UserRoleEnum; 

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    google: string;
}
