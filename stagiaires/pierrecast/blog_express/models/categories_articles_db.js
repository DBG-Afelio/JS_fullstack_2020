const pool = require("../db/pool");
const { response } = require("express");

async function getListCategoriesArticles() {
    const value = await pool.query(`SELECT * FROM categories_articles`)
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function getCategoriesArticlesById(id) {
    const value = await pool.query(`SELECT * FROM categories_articles WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function createCategoriesArticles(body) {
    const { article_id, categorie_id } = body;
    const value = await pool.query(`
        INSERT INTO categories_articles (article_id, categorie_id) VALUES ($1, $2, )`,[article_id, categorie_id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'categories_articles crée !';
}

async function updateCategoriesArticles(id, body) {
    const { article_id, categorie_id  } = body;
    const value = await pool.query(`
        UPDATE categories_articles SET 
        article_id = $1, 
        categorie_id = $2
    WHERE id = $3`,
[article_id, categorie_id, id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'CategoriesArticles modifié !';
}

async function deleteCategoriesArticles(id) {
    const value = await pool.query(`
    DELETE FROM categories_articles WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'CategoriesArticles supprimé !';
}

module.exports = {
    getListCategoriesArticles,
    getCategoriesArticlesById, 
    createCategoriesArticles, 
    updateCategoriesArticles, 
    deleteCategoriesArticles
};
