export class Cochon {
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }

    disBonjour() {
        console.log(`Grr Grr je m'appelle ${this.nom}`);
    }
}