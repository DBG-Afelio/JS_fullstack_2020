import { Animal } from './animal';

export class Cochon extends Animal{

    constructor(nom: string, sexe = 'F', couleur: string) {
        super(nom, sexe);
        this.couleur = couleur;
       
    }

    public ecrire() {
        const titre = super.ecrire();
        return `Je suis un cochon et  ${titre}`;
    }
}