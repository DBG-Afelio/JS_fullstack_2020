import { IsNotEmpty, IsString } from "class-validator";


export class AddArticleDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

}