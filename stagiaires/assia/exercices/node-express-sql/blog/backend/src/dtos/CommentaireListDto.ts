export interface CommentaireListDto {
    commentaires : CommentaireDto[]
}

export interface CommentaireDto{
    id : number,
    titre: string,
    contenu: string,
    articles_id: number,
    nom: string,
    prenom: string,
    date: Date
}

export interface CreateCommentaireDto{
    titre: string,
    contenu: string,
    articles_id: number,
    nom: string,
    prenom: string,
    date: Date
}
export interface CommentaireDb{
    id : number,
    titre: string,
    contenu: string,
    articles_id: number,
    nom: string,
    prenom: string,
    date: Date
}

