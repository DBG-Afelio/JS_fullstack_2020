import { Type } from "class-transformer";
import { IsDate, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Sex } from "../entities/sex.enum";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    nom: string;

    @IsOptional()
    @IsString()
    prenom: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    nationalityId: number;
    
    @IsNotEmpty()
    @IsIn(['F', 'M'])
    sex: Sex;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    date_naissance: Date;

    @IsNotEmpty()
    @IsString()
    login: string;


    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    date_debut: Date;

    @IsNotEmpty()
    @IsDate() 
    @Type(() => Date)
    date_fin: Date;
}