import { Article } from "./article";

export class OrderedArticle{

    protected article : Article;
    protected price : number;
    protected quantity : number;


    constructor(article:Article, quantity:number){
        this.article = article;
        this.quantity = quantity;
        this.price = article.getPrice();
    }
    getArticle() : Article{

        return this.article

    }
    getPrice() : number{

        return this.price

    }
    getQuantity() : number{

        return this.quantity

    }
    setQuantity(newQuantity : number) : void{

        this.quantity = newQuantity;

    }
    getTotalPrice() : number{

        return this.quantity * this.price

    }
}