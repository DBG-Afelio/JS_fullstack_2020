import { Article } from './Article';
import { ArticleCommande } from './Article-commande';

export class Panier {
    private listeCommandes: ArticleCommande[];
    constructor() {
        this.listeCommandes = [];
    }
    setList(list: ArticleCommande[]): void {
        this.listeCommandes = list;
    }
    getList(): null | ArticleCommande[]{
        return this.listeCommandes;
    }

    updatePanier(article: Article, qt: number): void{
        const artCom = this.findArticleEtIndex(article);
        if ( artCom === null && qt !== 0) {
            this.ajouteArticle(article, qt);
        } else {
            if (qt === 0) {
                this.supprimerArticle(artCom.articleTrouve);
            } else {
                this.updateArticleQtty(artCom.articleTrouve, qt);
            }
        }
    }

    public findArticleEtIndex(chercheArticle: Article): null | { articleTrouve: ArticleCommande, index: number } {
        const trouveIndex: number = this.listeCommandes.findIndex(artCom => artCom.getArticle() === chercheArticle);
        if (trouveIndex !== -1) {
            return { articleTrouve: this.listeCommandes[trouveIndex], index: trouveIndex };
        } else {
            return null;
        }
    }

    private ajouteArticle(article: Article, qtty: number): ArticleCommande{
        const nouvelAjout: ArticleCommande = new ArticleCommande();
        nouvelAjout.setArticle(article);
        nouvelAjout.setQtte(qtty);
        nouvelAjout.setPrix(article.getPrix());
        this.listeCommandes.push(nouvelAjout);
        return nouvelAjout;
    }
    private updateArticleQtty(articleCom: ArticleCommande, qtty: number): void{
        this.listeCommandes.map(art => art === articleCom ? art.setQtte(qtty) : art);
    }
    private supprimerArticle(articleCom: ArticleCommande): void {
        const index: number = this.listeCommandes.findIndex(art => art === articleCom);
        this.listeCommandes.splice(index, 1);
    }

    viderPanier(): void {
        this.listeCommandes = [];
    }

    getTotal(): { qtte: number, prix: number} {
        const total = {qtte: 0, prix: 0};
        this.listeCommandes.forEach(artCom => {
            total.qtte += artCom.getQtte();
            total.prix += artCom.getPrixTotal();
        });
        return total;
    }
}
