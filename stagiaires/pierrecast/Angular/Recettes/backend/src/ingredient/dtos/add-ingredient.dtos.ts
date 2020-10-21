import { Type } from "class-transformer";
import { IsString, IsDate, IsNumber, IsBoolean, IsOptional } from "class-validator";

export class AddIngredientDto {
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
    @IsNumber()
    @Type(() => Number)
    approved: boolean;
}