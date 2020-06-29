import { Article } from './Article';

export class Shop {
    private listeArticles: Article[] = [];

    constructor(articleEnStock: any[]) {
        articleEnStock.forEach(el => {
            const art = new Article(el.getTitre(), el.getAuteur(), el.getComments(), el.getPays(), el.getPrix(), el.getImage(), el.getId());
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
