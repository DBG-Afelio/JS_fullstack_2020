import { Transform, Type } from "class-transformer";
import { IsDate, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { RoleEntity } from "src/role/entities/role.entity";
import { Sex } from "../entities/sex.enum";

export class AddUserDto {
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

    @IsOptional()
    @Transform(
        roleIds => roleIds.map((id: number) => ({ id })) 
    )
    roles: Partial<RoleEntity>[];
    
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
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    date_debut: Date;

    @IsNotEmpty()
    @IsDate() 
    @Type(() => Date)
    date_fin: Date;
}