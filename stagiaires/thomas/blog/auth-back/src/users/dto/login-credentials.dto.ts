import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";
import { AddUserDto } from "./add-user-dto";

export class LoginCredentialsDto {

    @IsNotEmpty()
    @IsString()
    username: string;


    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    salt: string;

}