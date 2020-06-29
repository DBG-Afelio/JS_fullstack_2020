import { Article } from '../model/article';

export class Magasin {
    readonly listeArticles: Article[];
    constructor(articleEnStock: Article[]) {
        articleEnStock.forEach(el => {
            const art = new Article(el.getTitre(), el.getAuteur(), el.getComments(), el.getPays(), el.getPrix(), el.getImage(), el.getId());
            this.listeArticles.push(art);
        });
    }

    getList(): null | Article[]{
        return this.listeArticles;
    }
    getArticleById(chercheId: number): undefined | Article{
        return this.listeArticles.find(article => article.getId() === chercheId);
    }
}
