import { isNotEmpty, IsNotEmpty, IsString, IsOptional } from "class-validator"

export class UsersDto {

@IsNotEmpty()
@IsString()
id:number
lastName:string
email:string
nationality:string
gender:string
skills:string[]
birthdayDate:Date
password:string
login:string
availabilities?:Date[]
firstName?:string

}
