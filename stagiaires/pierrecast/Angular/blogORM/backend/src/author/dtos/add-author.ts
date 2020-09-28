import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class AddAuthorDto {
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsOptional()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    presentation: string;
}
