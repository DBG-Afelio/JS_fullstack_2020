import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
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
  @IsEnum(GenderEnum)
  public gender: GenderEnum;

  @IsNotEmpty()
  @IsDate()
  public dob: Date;

  @IsNotEmpty()
  @IsString()
  @Length(6,10)
  public pwd: string;
  
  @IsNotEmpty()
  @IsString()
  @Length(6,10)
  public login: string;

  @IsOptional()
  @IsDate()
  public freeFrom: Date;

  @IsOptional()
  @IsDate()
  public freeUntil: Date;
   
}