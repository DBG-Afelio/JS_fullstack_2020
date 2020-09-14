import { IsNotEmpty, IsString, IsOptional, IsArray, IsDate, IsNumber, IsEmail, ArrayMaxSize, ArrayMinSize, IsDateString, isDateString } from "class-validator"

export class UsersDto {

@IsNotEmpty()
@IsNumber()
id:number;

@IsNotEmpty()
@IsString()
lastName:string;

@IsNotEmpty()
@IsEmail()
email:string;

@IsNotEmpty()
@IsString()
nationality:string;

@IsNotEmpty()
@IsString()
gender:string;

@IsNotEmpty()
@IsArray()
skills:string[];

@IsNotEmpty()
@IsDateString()
birthdayDate:Date;

@IsNotEmpty()
@IsString()
password:string;

@IsNotEmpty()
@IsString()
login:string;

@IsOptional()
@IsArray()
@ArrayMaxSize(2)
@ArrayMinSize(2)
availabilities?:Date[];

@IsOptional()
@IsString()
firstName?:string;

}
