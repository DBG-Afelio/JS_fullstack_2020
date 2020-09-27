import { IsNotEmpty, IsString, IsOptional, IsDate, IsNumber, IsBoolean } from "class-validator";

export class UpdateArticleDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsNumber()
    authorId: number;
    
    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsBoolean()
    published: boolean
}
