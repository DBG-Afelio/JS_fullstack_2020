import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsDate, IsNumber, IsBoolean } from "class-validator";

export class UpdateArticleDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    authorId: number;
    
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsNotEmpty()
    @IsBoolean()
    published: boolean
}
