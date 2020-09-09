import { Sex } from "./sex.enum";
import { UserDto } from "../dtos/userDto";

export class User {

    constructor(
        public id: number,
        public nom: string,
        public email: string,
        public nation_id: string,
        public sex: Sex,
        //public roles: string[],
        public date_naissance: Date,
        public login: string,
        public date_debut: Date,
        public date_fin: Date,
        public prenom?: string
    ) {
///test
    }

    public toDto() :UserDto {
        return  {
            id: this.id,
            nom: this.nom,
            email: this.email,
            nation_id: this.nation_id,
            sex: this.sex,
            date_naissance: this.date_naissance,
            login: this.login,
            date_debut: this.date_debut,
            date_fin: this.date_fin,
            prenom: this.prenom,
        }
    }
}
