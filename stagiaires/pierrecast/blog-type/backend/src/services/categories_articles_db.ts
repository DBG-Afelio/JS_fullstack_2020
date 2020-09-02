import { pool } from "../db/pool";
import { response }  from "express";
import { getCodeError }  from "./error_handlers";

export async function getListCategoriesArticles() {
    const value = await pool.query(`SELECT * FROM categories_articles`)
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getCategoriesArticlesById(id: number) {
    const value = await pool.query(`SELECT * FROM categories_articles WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function createCategoriesArticles(categories:any[], articleId: number) {
    categories.forEach(async categorieId => {
        const value = await pool.query(`
            INSERT INTO categories_articles (article_id, categorie_id) VALUES ($1, $2)`,[articleId, categorieId] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

    });

    return 'Catégories inserées dans l\'article !';
}

export async function deleteCategoriesArticles(id: number) {
    const value = await pool.query(`
    DELETE FROM categories_articles WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'CategoriesArticles supprimé !';
}

export async function deleteAllCategoriesFromArticle(id: number) {
    const value = await pool.query(`
    DELETE FROM categories_articles WHERE article_id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return '- !';
}
