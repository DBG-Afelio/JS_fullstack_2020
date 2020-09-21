import { IsNotEmpty, IsString, IsOptional, IsArray, IsNumber, IsEmail, ArrayMaxSize, ArrayMinSize, IsDateString, isDateString, Validate } from "class-validator"
import { IsCountry } from "../validators/is-country";


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
@Validate(IsCountry)
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
