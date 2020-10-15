import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserRoleEnum } from "../entities/user-role.enum";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    password: string;  

    @IsOptional()
    @IsString()
    roles: UserRoleEnum;  
        
    @IsOptional()
    @IsEmail()
    email: string;
    
    @IsOptional()
    @IsString()
    google: string;
}