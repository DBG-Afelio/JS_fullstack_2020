import { Article } from "./articles";

export class AddedArticle{
    public article: Article;
    protected prix: number;
    protected quantity: number;

    constructor(article:Article, quantity:number){
        this.article = article;
        this.quantity = quantity;
        this.prix = article.getPrice();
    }

    getArticle(): Article{
        return this.article;
    }

    getPrice(): number{
        return this.prix;
    }

    getQuantity(): number{
        return this.quantity;
    }

    setQuantity(newQuantity: number) :void{
        this.quantity = newQuantity;
    }
    
    getTotalPrice(): number{
        return this.prix * this.quantity;
    }

}