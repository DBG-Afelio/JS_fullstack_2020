export interface UserDto {
     readonly id: number;
     readonly nom: string;
     readonly email: string;
     readonly nation_id: string;
     readonly sex: string;
     readonly date_naissance: Date;
     readonly login: string;
     readonly date_debut: Date;
     readonly date_fin: Date;
     readonly prenom?: string;
}