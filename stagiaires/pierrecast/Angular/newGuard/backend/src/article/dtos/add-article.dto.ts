import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsDate, IsNumber, IsBoolean } from "class-validator";

export class AddArticleDto {
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

    @IsNotEmpty()
    @IsBoolean()
    complete: boolean
}
