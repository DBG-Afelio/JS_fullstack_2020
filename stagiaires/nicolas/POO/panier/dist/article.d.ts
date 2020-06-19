export declare class Article {
    protected title: string;
    protected price: number;
    protected img: string;
    protected id: number;
    constructor(title: string, price: string, img: string, id: number);
    getTitle(): string;
    getPrice(): number;
    getImg(): string;
    getId(): number;
}
