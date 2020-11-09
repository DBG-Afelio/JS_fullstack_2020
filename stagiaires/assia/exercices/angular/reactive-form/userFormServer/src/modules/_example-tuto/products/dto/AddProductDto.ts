import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class AddProductDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    price: number;



}