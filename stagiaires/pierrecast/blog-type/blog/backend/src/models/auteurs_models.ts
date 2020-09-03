import { AuteurItemDto } from "../dtos/list_auteurs_dtos";

export class Auteur {
    constructor (
        public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public presentation: string,
    ) {

    }

    public toAuteurItemDto(): AuteurItemDto {
        return {
            id: this.id,
            nom: this.nom,
            prenom :this.prenom,
            email: this.email,
            presentation: this.presentation
        }
    }

    static fromDB(dbResult: {
        id: number;
        nom: string;
        prenom: string;
        email: string;
        presentation: string;

    }) {
        return new Auteur(
            dbResult.id,
            dbResult.nom,
            dbResult.prenom,
            dbResult.email,
            dbResult.presentation,
        );
    }
}
