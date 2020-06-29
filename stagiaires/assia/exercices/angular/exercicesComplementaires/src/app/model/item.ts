export class Item {
    private id:number;
    private nom: string;
    private qt:number;
    private stock:number;

    constructor(id:number, nom:string, qt:number, stock:number){
        this.id = id;
        this.nom = nom;
        this.qt = qt;
        this.stock=stock;
    }
    getId():number{
        return this.id;
    }
    getNom():string{
        return this.nom;
    }
    getQt():number{
        return this.qt;
    }
    setQt(qt:number):void{
        this.qt = qt;
    }
    getStock():number{
        return this.stock;
    }
}