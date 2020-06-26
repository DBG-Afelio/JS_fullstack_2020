import { IArticle } from '../interfaces/iarticle';

export class Magasin {
    readonly listeArticles: IArticle[];
    constructor(articleEnStock: IArticle[]) {
        this.listeArticles = articleEnStock;
    }

    getList(): null | IArticle[]{
        return this.listeArticles;
    }
    getArticleById(chercheId: number): undefined | IArticle{
        return this.listeArticles.find(article => article.id === chercheId);
    }
}
