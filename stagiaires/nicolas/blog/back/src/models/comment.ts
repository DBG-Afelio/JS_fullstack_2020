import { CommentDto } from "./dtos/commentDto";

export class Comment {

    constructor(
       public id:number,
       public titre:string,
       public auteurId:number,
       public dateAjout:Date,
       public articleId :number
    ){}

    static fromDto(commentDto:CommentDto):Comment{

        return new Comment(
            commentDto.id,
            commentDto.titre,
            commentDto.auteur_id,
            commentDto.date_ajout,
            commentDto.article_id
            )


    }
    toDto(comment:Comment):CommentDto{

        return {

            id:comment.id,
            titre:comment.titre,
            auteur_id:comment.auteurId,
            date_ajout:comment.dateAjout,
            article_id:comment.articleId

        }

    }
}