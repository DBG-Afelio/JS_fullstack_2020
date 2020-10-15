import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsNumber } from "class-validator";

export class UpdateAuthorDto {
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
