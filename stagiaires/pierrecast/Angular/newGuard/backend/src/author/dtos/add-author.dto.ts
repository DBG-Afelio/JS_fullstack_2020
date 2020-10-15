import { Expose, Transform, Type } from "class-transformer";
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsNumber } from "class-validator";
import { UserEntity } from "src/user/entities/user.entity";

export class AddAuthorDto {
    @IsNotEmpty()
    @IsString()
    familyname: string;

    @IsOptional()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    presentation: string;

    @IsBoolean()
    active: boolean;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    userId: number;
}
