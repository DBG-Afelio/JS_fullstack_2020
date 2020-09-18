import { Transform, Type } from "class-transformer";
import { Allow, IsDate, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { NationalityEntity } from "src/nationality/entities/nationality.entity";
import { RoleEntity } from "src/role/entities/role.entity";
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

    @IsOptional()
    @Transform(
        roleIds => roleIds.map((id: number) => ({ id })) 
    )
    roles: Partial<RoleEntity>[];

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