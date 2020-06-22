import { Article } from "./articles";

export class OrderedArticle {
    private article: Article;
    private quantity: number;

    constructor(article: Article, quantity: number){
        this.article = article;
        this.quantity = quantity;
    }

    setQuantity(quantity: number): void{
        this.quantity = quantity;
    }

    getTotalPrice(): number{
        return this.article.getPrix() * this.quantity;
    }

    getArticle(): Article{
        return this.article;
    }

    getQuantity(): number{
        return this.quantity;
    }

    

}