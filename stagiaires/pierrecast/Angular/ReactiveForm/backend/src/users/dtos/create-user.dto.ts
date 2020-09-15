import { IsString, IsNotEmpty, MaxLength, IsNumber, IsIn, IsDate, IsOptional, IsEmail } from 'class-validator'
import { Type } from 'class-transformer'


export class CreateUserDto {
   // readonly id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30, {
        message: 'Taille maximale est de 30 caractères'
    })
    readonly nom: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsNumber()
    @IsNotEmpty()
    @Type(()=> Number)
    readonly nation_id: string;

    @IsNotEmpty()
    @IsIn(['M', 'F'])
    readonly sex: string;

    @IsDate()
    @IsNotEmpty()
    readonly date_naissance: Date;

    @IsNotEmpty()
    @IsString()
    readonly login: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsDate()
    readonly date_debut: Date;

    @IsNotEmpty()
    @IsDate()
    readonly date_fin: Date;

    @IsString()
    @IsOptional()
    @MaxLength(30, {
        message: 'Taille maximale est de 30 caractères'
    })
    readonly prenom?: string;
}