import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsOptional, IsArray, IsNumber, IsEmail, ArrayMaxSize, ArrayMinSize, IsDateString, isDateString, Validate } from "class-validator"
import { UserEntity } from "src/entity/user.entity";
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

static toDto(UserEntity:UserEntity):UsersDto{

    const newDto = new UsersDto();

    newDto.id = UserEntity.id;
    newDto.lastName = UserEntity.lastName;
    newDto.id = UserEntity.id;
    newDto.gender = UserEntity.gender;
    newDto.birthdayDate = UserEntity.birthdayDate;
    newDto.login = UserEntity.login;
    newDto.nationality = UserEntity.nationality;
    newDto.password = UserEntity.password;
    newDto.availabilities = UserEntity.availabilities;

    return newDto

}

}
