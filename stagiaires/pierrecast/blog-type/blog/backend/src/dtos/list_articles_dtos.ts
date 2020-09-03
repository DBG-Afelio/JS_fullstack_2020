export interface ListArticlesDto {
    articles : ArticleItemDto[]
}

export interface ArticleItemDto {
    id: number,
    auteur_id: number,
    titre: string,
    contenu: string,
    date: Date,
    publie: boolean
}
