export class Cochon {
    private nom: string;  // variable d'instance
    private sexe: string;
    protected ddn: Date;
    private couleur?: string | null;

    constructor(nom: string, sexe = 'F') {
        this.nom = nom;
        this.sexe = sexe;
        this.ddn = new Date();
    }

    // Polymorphisme: pas possible en javascript
    // public disBonjour(test: boolean) {}

    public disBonjour() {
        console.log(`Grr Grr je m'appelle ${this.nom}`);
        console.log(`Je suis ${this.sexe}`);
    }


    public get Sexe() : string {
        return this.sexe;
    }

    
    public set Sexe(v : string) {
        this.sexe = v;
    }

    // Encapsulation des propriétés par des getter et setter
    public getNom() {
        return this.nom;
    }

    public setNom(nom: string) {
        return this.nom = nom;
    }
    
    public setCouleur(couleur: string) {
        if ( this.sexe === 'F' && couleur === 'rouge') {
            throw new Error('Couleur rouge impossible pour les filles');
        } else {
            this.couleur = couleur;
        }
    }
    
    public getCouleur() {
        return this.couleur;
    }

    public rencontreCochon (voisin: Cochon) {
        this.disBonjour();
        voisin.disBonjour();
        if (this.sexe !== voisin.Sexe) {
            return new Cochon(this.nom + voisin.getNom());
        }
        return null;
    }
}
