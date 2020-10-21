import { Type } from "class-transformer";
import { IsString, IsNumber, IsBoolean, IsOptional } from "class-validator";

export class UpdateIngredientDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    imgUrl: string;
    
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    proteins: number;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    fats: number;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    carbs: number;

    @IsOptional()
    @IsBoolean()
    @Type(() => Number)
    approved: boolean;
}