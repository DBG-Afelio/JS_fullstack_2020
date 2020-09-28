import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class UpdateAuthorDto {
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
