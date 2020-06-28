import { Article } from 'src/app/article';
import { ArticlesService } from '../articles.service';

export class Command{
    article: Article;
    price: number;
    quantity: number;

    constructor(article: Article, price: number, quantity: number) {
        this.article = article;
        this.price = parseFloat(article.Prix);
        this.quantity = quantity;
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