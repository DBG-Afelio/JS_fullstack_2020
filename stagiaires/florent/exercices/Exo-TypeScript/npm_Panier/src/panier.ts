import { OrderedArticle } from "./oderedArticle";
import { Article } from "./articles";

export class Panier{
    listeArticle: OrderedArticle[];

    constructor(){
        this.listeArticle = [];
    }

    addArticle(article: OrderedArticle): void{
        this.listeArticle.push(article);
    }

    updateArticle(article : OrderedArticle,quantite:number):void{
        article.setQuantity(quantite);
    }

    deletedArticle(id:number):void{
        this.listeArticle = this.listeArticle.filter(filterarticle => id!==filterarticle.getArticle().id);
    }

    updatePanier(article:Article,quantite:number):void{
        let variable = this.findArticle(article);
        if (variable) {
            if (quantite<=0) {
                this.deletedArticle(article.id);
            } else {
                this.updateArticle(variable,quantite);
            }
        } else {
            if (quantite>0) {
                this.addArticle(new OrderedArticle(article,quantite));
            }
        }
    }

    findArticle(article:Article):OrderedArticle|undefined{
        return this.listeArticle.find(element=>article.id===element.getArticle().id);
    }

    getListOrderedArticles():OrderedArticle[]{
        return this.listeArticle;
    }

    getTotal():number{
        let total = 0;
        this.listeArticle.forEach(element => {total += element.getArticle().getPrix() * element.getQuantity()});
        return total;
    }

    empty():void{
        this.listeArticle = [];
    }


}