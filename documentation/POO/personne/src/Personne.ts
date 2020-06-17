// Dans un fichier séparé, Créer et exporter une classe Personne avec:
// - 3 propriétés : un nom, un prenom, un age,
// - 3 accesseurs sur ces propriétés
// - un constructeur
import { Couleur } from "./Couleur";

export class Personne {
    private _couleurPreferee: Couleur;
    private _nom: string;
    private _prenom: string;
    private _age: number;

    constructor(nom: string, prenom: string, age: number, couleurPreferee: Couleur){
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._couleurPreferee = couleurPreferee;
    }

    public memeCouleur(autre: Personne): boolean{
        return autre.couleur === this.couleur;
    }

    get couleur(){
        return this._couleurPreferee;
    }

    get nom(): string {
        return this._nom;
    }
    get prenom(): string {
        return this._prenom;
    }
    get age(): number {
        return this._age;
    }

}
