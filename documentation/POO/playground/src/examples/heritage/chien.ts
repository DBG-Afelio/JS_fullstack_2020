import { Animal } from './animal';

export class Chien extends Animal {
    protected race: string;

    constructor(
        nom: string,
        race: string,
        sexe ?: string,
        couleur: string = 'gris') {
            super(nom, sexe);
            this.race = race;
            this.couleur = couleur;
    }

    public ecrire() {
        const titre = super.ecrire();
        return `Je suis un chien de race ${this.race},
        de sexe ${this.sexe}
        de couleur ${this.couleur}
         ${titre}`;
    }
}