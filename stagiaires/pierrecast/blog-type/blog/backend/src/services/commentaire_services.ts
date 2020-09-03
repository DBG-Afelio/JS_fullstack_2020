import { pool } from "../db/pool";
import { getCodeError }  from "./error_handlers";
import { CensureService } from "./censure_services";
import { Commentaire } from "../models/commentaires_models";

const censureService = new CensureService();

export class CommentaireService {
    async getListCommentaires(): Promise<Commentaire[]> {
        const commentairesRows = await pool.query(`SELECT * FROM commentaires`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        const commentaires: Commentaire[] = commentairesRows.rows.map(
            (row: any) => new Commentaire(
                row.id,
                row.articleId,
                row.titre,
                row.nom,
                row.prenom,
                row.commentaire,
                row.dateAjout
            )
        );
        return commentaires;
    }

    async getCommentairesByArticle(id: number): Promise<Commentaire[]> {
        const commentairesRows = await pool.query(`SELECT * FROM commentaires WHERE article_id = $1 `, [id])
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        const commentaires: Commentaire[] = commentairesRows.rows.map(
            (row: any) => new Commentaire(
                row.id,
                row.articleId,
                row.titre,
                row.nom,
                row.prenom,
                row.commentaire,
                row.dateAjout
            )
        );
        return commentaires;
    }

    async getCommentaireById(id: number): Promise<Commentaire> {
        const commentairesRows = await pool.query(`SELECT * FROM commentaires WHERE id = $1`, [id])
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const commentaire: Commentaire = new Commentaire(
            commentairesRows.rows[0].id,
            commentairesRows.rows[0].articleId,
            commentairesRows.rows[0].titre,
            commentairesRows.rows[0].nom,
            commentairesRows.rows[0].prenom,
            commentairesRows.rows[0].commentaire,
            commentairesRows.rows[0].dateAjout
        );
        return commentaire;
    }

    async createCommentaire(body: any) {
        const { nom, prenom, titre, article_id, commentaire, date_ajout  } = body;

        if (!await censureService.checkComm(body)) {
            throw new Error('MOT_INTERDIT')
        }
            const value = await pool.query(`
                INSERT INTO commentaires (nom, prenom, titre,article_id, commentaire, date_ajout) VALUES ($1, $2, $3, $4, $5, $6)`,[nom, prenom, titre, article_id, commentaire, date_ajout] )
            .catch((error: Error) => {
                console.log(error);
                throw new Error(getCodeError(error));
            });

        return 'Commentaire crée !';
    }

    async updateCommentaire(id: number, body: any) {
        const { nom, prenom, titre, article_id, commentaire, date_ajout  } = body;
        const value = await pool.query(`
            UPDATE commentaires SET
            nom = $1,
            prenom = $2,
            titre = $3,
            article_id = $4,
            commentaire = $5,
            date_ajout = $6
        WHERE id = $7`,
    [nom, prenom, titre, article_id, commentaire, date_ajout, id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Commentaire modifié !';
    }

    async deleteCommentaire(id: number) {
        const value = await pool.query(`
        DELETE FROM commentaires WHERE id = $1`, [id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Commentaire supprimé !';
    }
}