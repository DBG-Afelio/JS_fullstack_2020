import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class UpdateProductDto {
    @IsOptional() // diff avec AddProductDto, ici je ne suis pas forcee d'avoir toutes mes prop pour un update
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsNumber()
    @Min(1)
    price: number;
}