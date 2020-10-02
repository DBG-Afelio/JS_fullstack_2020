import { IsBoolean, IsEmail, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { RolesEnum } from "src/enum/roles.enum";


export class UpdateUserDto {

    @IsOptional()
    @IsString()
    login: string;

    @IsOptional()
    @IsString()
    _password: string;

    @IsOptional()
    @IsString()
    familyName: string;

    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsEnum(RolesEnum)
    role: RolesEnum;

    @IsOptional()
    @IsBoolean()
    isBlocked: boolean;

    @IsOptional()
    @IsEmail()
    email: string;
}
