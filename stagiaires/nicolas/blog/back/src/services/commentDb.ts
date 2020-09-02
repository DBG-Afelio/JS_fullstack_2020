import { pool } from "../pool";
import { Comment } from "../models/comment";
import { CommentDto } from "../models/dtos/commentDto";
import { Errors } from "../errors/Errors";

export class CommentDb {

    static async hideBannedWords(comments:Comment[]):Promise<Comment[]>{

        const bannedWords = await pool.query("SELECT * FROM BannedWords")
        const filteredComments = comments;
        filteredComments.forEach(comment => {

            bannedWords.rows.forEach(word => {

                if(comment.titre.includes(word.term) && word.hidden){

                    comment.titre = comment.titre.replace(word.term,"*".repeat(word.term.length))

                }

            })
        })

        return filteredComments

    }

    static async containsBannedWords(text:string):Promise<boolean>{

        const bannedWordsDb = await pool.query("SELECT * FROM BannedWords")
        const containsBannedWords = bannedWordsDb.rows.some(wordDB => wordDB.forbidden && text.includes(wordDB.term))

        return containsBannedWords

    }

    static async getAllComments():Promise<Comment[]>{

        const result = await pool.query("SELECT * FROM Commentaires")
        .then(resultDb => {

           return this.hideBannedWords(resultDb.rows)

        }).catch(error => {

            console.log(error);
            throw new Error('erreur');

        })

        return result

    }
    static async getCommentByid(id:string):Promise<Comment[]>{

        const result = await pool.query("SELECT * FROM Commentaires WHERE id = $1",[id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }

    static async getCommentsByArticleId(id:string):Promise<Comment[]>{

        const result = await pool.query("SELECT * FROM Commentaires WHERE article_id = $1",[id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }

    static async getCommentsByAuthorId(id:string):Promise<Comment[]>{

        const result = await pool.query("SELECT * FROM Commentaires WHERE auteur_id = $1",[id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }

    static async createComment(bodyRequest:CommentDto){


        const {titre,auteur_id,date_ajout,article_id} = bodyRequest;



        if(await this.containsBannedWords(titre)){

            throw new Error('ce commentaire contient un mot interdit')

        }else{

            const result = await pool.query("INSERT INTO Commentaires (titre,auteur_id,date_ajout,article_id) VALUES ($1,$2,$3,$4) ",[titre,auteur_id,date_ajout,article_id])
            .catch(error => {

                console.log(error);
                throw new Error(Errors.convertPGErrors(error.code));

            })
            return result.rows

        }



    }

    static async modifyComment(id:string, bodyRequest:CommentDto){

        const {titre,auteur_id,date_ajout,article_id} = bodyRequest;


        const result = await pool.query("UPDATE commentaires SET titre = $1,auteur_id = $2,date_ajout = $3,article_id = $4 WHERE id = $5 ",[titre,auteur_id,date_ajout,article_id,id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }
    static async deleteComment(id:string){

        const result = await pool.query("DELETE FROM Commentaires WHERE id = $1 ",[id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }

}
