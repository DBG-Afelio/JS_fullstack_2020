import { CatArticleItemDto } from "../dtos/list_cat_articles_dtos";

export class CatArticle {
    constructor (
        public id: number,
        public articleId: number,
        public categorieId: number,
    ) {

    }

    public toArticleItemDto(): CatArticleItemDto {
        return {
            id: this.id,
            article_id: this.articleId,
            categorie_id: this.categorieId
        }
    }

    static fromDB(dbResult: {
        id: number;
        article_id: number;
        categorie_id: number;
    }) {
        return new CatArticle(
            dbResult.id,
            dbResult.article_id,
            dbResult.categorie_id,
        );
    }
}
