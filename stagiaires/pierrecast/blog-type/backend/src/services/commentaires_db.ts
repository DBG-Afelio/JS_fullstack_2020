import { pool } from "../db/pool";
import { response }  from "express";
import { getCodeError }  from "./error_handlers";
import { checkComm } from "./censures_db"

export async function getListCommentaires() {
    const value = await pool.query(`SELECT * FROM commentaires`)
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getCommentairesByArticle(id: number) {
    const value = await pool.query(`SELECT * FROM commentaires WHERE article_id = $1 `, [id])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getCommentaireById(id: number) {
    const value = await pool.query(`SELECT * FROM commentaires WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function createCommentaire(body: any) {
    const { nom, prenom, titre, article_id, commentaire, date_ajout  } = body;

    if (!await checkComm(body)) {
        throw new Error('MOT_INTERDIT')
    }
        const value = await pool.query(`
            INSERT INTO commentaires (nom, prenom, titre,article_id, commentaire, date_ajout) VALUES ($1, $2, $3, $4, $5, $6)`,[nom, prenom, titre, article_id, commentaire, date_ajout] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

    return 'Commentaire crée !';
}

export async function updateCommentaire(id: number, body: any) {
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
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Commentaire modifié !';
}

export async function deleteCommentaire(id: number) {
    const value = await pool.query(`
    DELETE FROM commentaires WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Commentaire supprimé !';
}
