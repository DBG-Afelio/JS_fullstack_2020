import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProduitsDto {
    @IsOptional()
    @IsString()
    nom : string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    prix: number;

}