export class Option {
    constructor(
        public id: number,
        public name: string,
        public price: number,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getId():number {
        return this.id;
    }

    public getName():string {
        return this.name;
    }

    public getPrice():number {
        return this.price;
    }
}
