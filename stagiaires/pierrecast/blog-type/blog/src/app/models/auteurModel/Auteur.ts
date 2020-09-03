import { AuteurDto } from './AuteurDto';

export class Auteur {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public presentation: string
    ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.presentation = presentation;
    }

    public getId():number {
        return this.id;
    }

    public getNom():string {
        return this.nom;
    }

    public getPrenom():string {
        return this.prenom;
    }


    public getEmail():string {
        return this.email;
    }

    public getPresentation():string {
        return this.presentation;
    }

    public static fromDto(auteurDto: AuteurDto): Auteur {
        return new Auteur(
            auteurDto.id, 
            auteurDto.nom, 
            auteurDto.prenom, 
            auteurDto.email,
            auteurDto.presentation,
        );
    }

    public toDto(): AuteurDto {
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            email: this.email, 
            presentation: this.presentation,
        }
    }
}
