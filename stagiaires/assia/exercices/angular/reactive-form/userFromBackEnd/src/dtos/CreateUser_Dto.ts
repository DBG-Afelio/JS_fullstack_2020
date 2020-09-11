import { IsString, IsNotEmpty, Length, IsEmail, IsInt, IsDate, IsOptional, MinLength } from "class-validator";

export class CreateUser_Dto {
    @IsString()
    @IsNotEmpty()
    @Length(1,30)
    public familyName: string;

    @IsOptional()
    @IsString()
    @Length(1,30)
    public firstName: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsInt()
    public nationId: number;

    @IsNotEmpty()
    @IsString() 
    public gender: string;

    @IsNotEmpty()
    @IsDate()
    public dob: Date;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    public pwd: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    public login: string;

    @IsOptional()
    @IsDate()
    public freeFrom: Date;

    @IsOptional()
    @IsDate()
    public freeUntil: Date;
}
