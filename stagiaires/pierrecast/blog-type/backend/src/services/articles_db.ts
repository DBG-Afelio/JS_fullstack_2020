import { pool } from "../db/pool";
import { response } from "express";
import { getCodeError }  from "./error_handlers";

export async function getListArticles() {
    const value = await pool.query(`SELECT * FROM articles`)
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getArticleById(id: number) {
    const value = await pool.query(`SELECT * FROM articles WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getArticleByAuteur(id: number) {
    const value = await pool.query(`SELECT * FROM articles WHERE auteur_id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getArticleByPage(page: number, parPage: number) {
    const value = await pool.query(`
        SELECT * FROM articles
        LIMIT $2 OFFSET ($1-1)*$2`, [page, parPage])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function createArticle(body:any) {
    const { titre, contenu, auteur_id, date, publie  } = body;
    const value = await pool.query(`
        INSERT INTO articles (titre, contenu ,auteur_id,date, publie)
        VALUES ($1, $2, $3, $4, $5)
        `,[titre, contenu ,auteur_id,date, publie] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    console.log('Article crée !');
    return 'Article crée !';
}

export async function updateArticle(id: number, body:any) {
    const { titre, contenu, auteur_id, date, publie  } = body;
    const value = await pool.query(`
        UPDATE articles SET
        titre = $1,
        contenu = $2,
        auteur_id = $3,
        date  = $4,
        publie = $5
    WHERE id = $6`,
[titre, contenu, auteur_id, date, publie, id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Article modifié !';
}

export async function deleteArticle(id: number) {

    const value = await pool.query(`
    DELETE FROM articles WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Article supprimé !';
}

export async function getInsertId() {
    const value = await pool.query(`SELECT MAX(id) FROM articles`)
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    console.log('Article_id :', value.rows[0].max);
    return value.rows[0].max;
}
