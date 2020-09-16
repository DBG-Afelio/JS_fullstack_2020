import { IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength, MinLength } from "class-validator";
import { GenderEnum } from "src/enums/gender.enum";

export class AddStagiaireDto {

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
  @IsNumber()
  public nationId: number;

  @IsNotEmpty()
  @IsEnum(GenderEnum) // << affaire a suivre...
  public gender: string;

  @IsNotEmpty()
  @IsDateString()
  public dob: Date;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(100)
  public pwd: string;
  
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(10)
  public login: string;

  @IsOptional()
  @IsDateString()
  public freeFrom: Date;

  @IsOptional()
  @IsDateString()
  public freeUntil: Date;
   
}