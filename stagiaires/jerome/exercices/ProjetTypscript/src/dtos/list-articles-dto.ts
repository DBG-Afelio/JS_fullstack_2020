export interface ListArticlesDto {
    articles : ArticleItemDto[]
}

export interface ArticleItemDto {
    id : number,
    title : string,
    autorId : number 
}

/* exemple de retour
{
    articles : [
        {
            id:1,
            title:'titre',
            autorId:2
        },
        {
            id:1,
            title:'titre',
            autorId:2
        },
    ]
}

