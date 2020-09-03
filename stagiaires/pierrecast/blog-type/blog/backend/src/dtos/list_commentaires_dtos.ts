export interface ListCommentairesDto {
    Commentaires : CommentaireItemDto[]
}

export interface CommentaireItemDto {
    id: number,
    article_id: number,
    titre: string,
    nom: string,
    prenom: string,
    commentaire: string,
    date_ajout: string,
}
