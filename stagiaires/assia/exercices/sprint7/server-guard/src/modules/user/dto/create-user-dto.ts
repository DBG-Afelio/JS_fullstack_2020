import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { RolesEnum } from 'src/enum/roles.enum';
import { ArticleEntity } from 'src/modules/article/entities/article.entity';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  googleId?: string;

  @IsOptional()
  @IsString()
  googleToken?: string;

  @IsOptional()
  @IsString()
  login?: string;

  @IsOptional()
  @IsString()
  _password?: string;

  @IsOptional()
  @IsString()
  familyName?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  role?: RolesEnum;

  @IsOptional()
  @IsBoolean()
  isBlocked?: boolean;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsBoolean()
  authorAccessRightsRequested?: boolean;
}

export class CreateCredentialsDto {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  _password: string;
}
