import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { RolesEnum } from 'src/enum/roles.enum';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  googleId: string;

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
