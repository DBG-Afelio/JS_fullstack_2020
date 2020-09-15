import { IsNotEmpty, IsString } from "class-validator";

export class UpdateNationalityDto {
    @IsNotEmpty()
    @IsString()
    nationality: string;
    
}