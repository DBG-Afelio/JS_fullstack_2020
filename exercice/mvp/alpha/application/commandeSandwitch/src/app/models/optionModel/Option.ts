export class Option {
    constructor(
        public id: number,
        public nom: string,
        public surcout: number,
    ) { }

    public getId():number {
        return this.id;
    }

    public getNom():string {
        return this.nom;
    }

    public getSurcout():number {
        return this.surcout;
    }
}
