export interface ArticleListDto {
    articles : ArticleDto[]
}

export interface ArticleDto{
    id : number,
    titre: string,
    contenu: string,
    auteurs_id: number,
    date: Date,
    publie: boolean
}

export interface CreateArticleDto{
    titre: string,
    contenu: string,
    auteurs_id: number,
    date: Date,
    publie: boolean
}

export interface ArticleDb{
    id : number,
    titre: string,
    contenu: string,
    auteurs_id: number,
    date: Date,
    publie: boolean
}