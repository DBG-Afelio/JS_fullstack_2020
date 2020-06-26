import { IArticleCommande } from '../interfaces/iarticle-commande';
import { IArticle } from '../interfaces/iarticle';

export class ArticleCommande implements IArticleCommande{
    article: IArticle;
    quantite: number;

    getOrderedItem(): IArticleCommande{
        return;
    }
    getArticleCom(): IArticleCommande{
        return this;
    }
    getId(): number{
        return this.article.id;
    }
    getPrixTotal(): number{
        return this.quantite * this.article.prix;
    }
    getQtte(): number{
        return this.quantite;
    }
    setQtte(qtte: number): void{
        this.quantite = qtte;
    }
}
