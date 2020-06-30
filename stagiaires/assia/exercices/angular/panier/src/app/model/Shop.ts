import { Article } from './Article';

export class Shop {
    private listeArticles: Article[] = [];

    constructor(articleEnStock: any[]) {
        articleEnStock.forEach(el => {
            const art = new Article(el.titre, el.auteur, el.commentaire, el.pays, el.prix, el.image, el.id);
            this.listeArticles.push(art);
        });
    }

    getList(): Article[]{
        return this.listeArticles;
    }
    setList(maList: Article[]): void {
        this.listeArticles = maList;
    }
    getArticleById(chercheId: number): undefined | Article{
        return this.listeArticles.find(article => article.getId() === chercheId);
    }

}
