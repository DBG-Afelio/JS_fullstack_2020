export interface ListCatArticlesDto {
    cat_articles : CatArticleItemDto[]
}

export interface CatArticleItemDto {
    id: number,
    article_id: number,
    categorie_id: number,
}
