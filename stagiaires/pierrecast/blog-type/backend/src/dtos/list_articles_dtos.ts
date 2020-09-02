export interface ListArticlesDto {
    articles : ArticleItemDto[]
}

export interface ArticleItemDto {
    id: number,
    titre: string,
    contenu: string,
    auteur_id: number,
    date: Date,
    publie: boolean
}
