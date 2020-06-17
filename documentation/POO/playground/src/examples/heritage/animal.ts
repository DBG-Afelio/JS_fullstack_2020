export class Animal {
    private nom: string;  // variable d'instance
    protected sexe: string;
    protected ddn: Date;
    protected couleur?: string | null;

    constructor(nom: string, sexe = 'F') {
        this.nom = nom;
        this.sexe = sexe;
        this.ddn = new Date();
    }

    ecrire() {
        return `nom : ${this.nom}`;
    }
    
    toString() {
        return this.ecrire();
    }
}