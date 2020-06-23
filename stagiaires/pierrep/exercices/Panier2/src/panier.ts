import { Article } from "./articles"; //pourquoi cette classe est-elle grisée ?
import { AddedArticle } from "./addedArticle";

export class Panier{

    protected listeArticle: AddedArticle[]; 
    // ci-dessus on définit que la propriété listeArticle
    // va prendre pour valeur un tableau ([]) qui correspond
    // à la classe AddedArticle

    constructor(){
        this.listeArticle = [];
    }

    private addArticle(article: AddedArticle):void
    {
        this.listeArticle.push(article);
    }

    private updateArticle(article : AddedArticle, quantite: number): void{
        article.setQuantity(quantite);
    }

    private deleteArticle(id:number){
        const articleIndex:number = this.listeArticle.findIndex(element => element.article.id===id);
        if(articleIndex !== -1){
            this.listeArticle.splice(articleIndex, 1);
        }
    }

    public updatePanier(article: Article, quantity: number){
        let foundArt = this.findArticle(article);
        if(foundArt === undefined){
            if(quantity != 0){
                let newArticle = new AddedArticle(article, quantity);
                this.addArticle(newArticle);
            }
        }
        else{
            if(quantity != 0){
                this.updateArticle(foundArt, quantity);
            }
            else{
                this.deleteArticle(article.id);
            }
        }
    }

    private findArticle(article: Article): AddedArticle | undefined{
        return this.listeArticle.find(element => element.article === article);
    }

// getListAddedArticles : cette méthode doit retourner un tableau d'articles à partir de l'objet/classe AddedArticle

    getListAddedArticles():AddedArticle[]{
        return this.listeArticle;
    };

    getTotal(): number{
        let totalP = 0;
        this.listeArticle.forEach(article => {
            totalP += article.getPrice() * article.getQuantity();
        })
        return totalP;
    };

}
