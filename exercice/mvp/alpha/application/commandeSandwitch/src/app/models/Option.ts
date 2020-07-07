export class Option {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public productId: number,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.productId = productId;
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

    public getProductId():number {
        return this.productId;
    }
}
