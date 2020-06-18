export class Personne {
    private _nom: string;
    private _prenom: string;
    private _age: number;

    constructor(nom: string, prenom: string, age:number){
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
    }

    get nom(): string{
        return this._nom;
    }
    get prenom(): string{
        return this._prenom;
    }
    get age(): number{
        return this._age;
    }

}