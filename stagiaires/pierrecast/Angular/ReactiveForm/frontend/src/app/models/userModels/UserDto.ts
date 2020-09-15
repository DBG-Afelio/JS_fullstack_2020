import { Role } from '../roleModel/Role';
import { Sex } from './sex.enum';

export interface UserDto {
    readonly id: number;
    readonly nom: string;
    readonly email: string;
    readonly nationality: string;
    readonly sex: Sex;
    readonly roles: Role[];
    readonly date_naissance: Date;
    readonly login: string;
    readonly date_debut: Date;
    readonly date_fin: Date;
    readonly prenom?: string;
}