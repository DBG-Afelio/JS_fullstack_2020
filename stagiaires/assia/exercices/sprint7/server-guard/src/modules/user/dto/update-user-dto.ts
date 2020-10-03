import { IsBoolean, IsEmail, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { RolesEnum } from "src/enum/roles.enum";


export class UpdateUserDto {
  @IsOptional()
  @IsString()
  familyName: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  login: string;

  @IsOptional()
  @IsString()
  _password: string;

  @IsOptional()
  @IsBoolean()
  isBlocked: boolean;

  @IsOptional()
  @IsEnum(RolesEnum)
  role: RolesEnum;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsBoolean()
  authorAccessRightsRequested: boolean;
}
