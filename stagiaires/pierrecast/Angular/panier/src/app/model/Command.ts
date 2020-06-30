import { Article } from './Article';

export class Command{
    private article: Article;
    private price: number;
    private quantity: number;

    constructor(article: Article, price: number, quantity: number) {
        this.article = article;
        this.price = price;
        this.quantity = quantity;
    }

    public getArticle(): Article 
    {
        return this.article;
    }

    public getPrice(): number 
    {
        return this.price;
    }

    public getQuantity():number 
    {
        return this.quantity;
    }

    public setQuantity(quantity :number):void 
    {
        this.quantity = quantity;
    }

    public getTotalPrice(): number 
    {
        return this.quantity * this.price;
    }
}
