import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddUserDto {

    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsEmail()
    @IsOptional()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly role: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

}