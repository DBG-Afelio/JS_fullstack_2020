export class Command{
    private id: number;
    private prix: number;
    private qte: number;

    constructor(id: number, prix: number, qte:number) {
        this.id = id;
        this.prix = prix;
        this.qte = qte;
    }
}
