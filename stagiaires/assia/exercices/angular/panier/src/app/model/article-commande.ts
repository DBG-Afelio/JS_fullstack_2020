import { Article } from './Article';

export class ArticleCommande {
    public article: Article;
    public quantite: number;
    public prix: number;
    public panierId?: number;

    getArticle(): Article{
        return this.article;
    }
    setArticle(article: Article): void{
        this.article = article;
    }
    getPrix(): number{
        return this.prix;
    }
    setPrix(prix: number): void{
        this.prix = prix;
    }
    getPrixTotal(): number{
        return this.quantite * this.prix;
    }
    getQtte(): number{
        return this.quantite;
    }
    setQtte(qtte: number): void{
        this.quantite = qtte;
    }
}
