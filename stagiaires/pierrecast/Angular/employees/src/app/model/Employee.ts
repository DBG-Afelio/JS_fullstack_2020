export class Employee {
    public id:number;
    public prenom: string;
    public nom: string;
    public manager: boolean;

    constructor(id: number, prenom:string, nom:string, manager:boolean) {
        this.id = id;
        this.prenom = prenom;
        this.nom = nom;
        this.manager = manager;
    }

    public getId():number {
        return this.id;
    }

    public getPrenom():string {
        return this.prenom;
    }

    public getNom():string {
        return this.nom;
    }

    public isManager():boolean {
        return this.manager;
    }
}
