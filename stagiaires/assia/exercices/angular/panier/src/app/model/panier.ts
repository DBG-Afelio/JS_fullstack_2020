import { IArticleCommande } from '../interfaces/iarticle-commande';
import { IArticle } from '../interfaces/iarticle';
import { Article } from './article';
import { ArticleCommande } from './article-commande';

export class Panier {
    private articlesCommandes: IArticleCommande[];
    constructor() {
        this.articlesCommandes = [];
    }
    getList(): null | IArticleCommande[]{
        return this.articlesCommandes;
    }
    trouveArticleEtIndex(chercheArticle: IArticle): null | { articleTrouve: IArticleCommande, index: number } {
        const trouveIndex: number = this.articlesCommandes.findIndex(artCom => artCom.getId() === chercheArticle.id);
        if (trouveIndex !== -1) {
            return { articleTrouve: this.articlesCommandes[trouveIndex], index: trouveIndex };
        } else {
            return null;
        }
    }
    ajouteArticle(article: IArticle, qtty: number): IArticleCommande{
        const nouvelAjout: IArticleCommande = new ArticleCommande();
        nouvelAjout.article = article;
        nouvelAjout.setQtte(qtty);
        this.articlesCommandes.push(nouvelAjout);
        return nouvelAjout;
    }
    updateArticleQtty(articleCom: IArticleCommande, qtty: number): void{
        this.articlesCommandes.map(art => art === articleCom ? art.setQtte(qtty) : art);
    }
    supprimerArticle(articleCom: IArticleCommande): void {
        const index: number = this.articlesCommandes.findIndex(art => art === articleCom);
        this.articlesCommandes.splice(index, 1);
    }

    viderPanier(): void {
        this.articlesCommandes = [];
    }

    getTotal(): { qtte: number, prix: number} {
        const total = {qtte: 0, prix: 0};
        this.articlesCommandes.forEach(artCom => {
            total.qtte += artCom.getQtte();
            total.prix += artCom.getPrixTotal();
        });
        return total;
    }
}
