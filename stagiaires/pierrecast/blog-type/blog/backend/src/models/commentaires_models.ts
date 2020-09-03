import { CommentaireItemDto } from "../dtos/list_commentaires_dtos";

export class Commentaire {
    constructor (
        public id: number,
        public articleId: number,
        public titre: string,
        public nom: string,
        public prenom: string,
        public commentaire: string,
        public dateAjout: string,
    ) {

    }

    public toArticleItemDto(): CommentaireItemDto {
        return {
            id: this.id,
            article_id: this.articleId,
            titre :this.titre,
            nom: this.nom,
            prenom: this.prenom,
            commentaire: this.commentaire,
            date_ajout: this.dateAjout
        }
    }

    static fromDB(dbResult: {
        id: number;
        article_id: number;
        titre: string;
        nom: string;
        prenom: string;
        commentaire: string;
        dateAjout: string,
    }) {
        return new Commentaire(
            dbResult.id,
            dbResult.article_id,
            dbResult.titre,
            dbResult.nom,
            dbResult.prenom,
            dbResult.commentaire,
            dbResult.dateAjout,
        );
    }
}
