import { IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength, MinLength } from "class-validator";
import { GenderEnum } from "src/enums/gender.enum";

export class UpdateStagiaireDto {

  @IsNumber()
  @IsOptional()
  public id: number;
  
  @IsString()
  @IsOptional()
  @Length(1,30)
  public familyName: string;

  @IsOptional()
  @IsString()
  @Length(1,30)
  public firstName: string;

  @IsOptional()
  @IsEmail()
  public email: string;

  @IsOptional()
  @IsNumber()
  public nationId: number;

  @IsOptional()
  @IsEnum(GenderEnum) // << affaire a suivre...
  public gender: string;

  @IsOptional()
  @IsDateString()
  public dob: Date;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(100)
  public pwd: string;
  
  @IsOptional()
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