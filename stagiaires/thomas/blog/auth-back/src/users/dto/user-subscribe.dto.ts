import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AddUserDto } from "./add-user-dto";

export class UserSubscribeDto extends PartialType(AddUserDto) {}



