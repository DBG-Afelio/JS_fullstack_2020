import { IsNotEmpty, IsString } from "class-validator";

export class AddNationalityDto {
    @IsNotEmpty()
    @IsString()
    nationality: string;
    
}