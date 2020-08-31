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

async function createCategoriesArticles(categories, article_id) {
    categories.forEach(async categorie_id => {
        const value = await pool.query(`
            INSERT INTO categories_articles (article_id, categorie_id) VALUES ($1, $2)`,[article_id, categorie_id] )
        .catch(error => {
            console.log(error);
            throw new Error('Error');
        });
 
    });
    
    return 'Catégories inserées dans l\'article !';
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

async function deleteAllCategoriesFromArticle(id) {
    const value = await pool.query(`
    DELETE FROM categories_articles WHERE article_id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return '- !';
}

module.exports = {
    getListCategoriesArticles,
    getCategoriesArticlesById, 
    createCategoriesArticles, 
    deleteCategoriesArticles, 
    deleteAllCategoriesFromArticle
};
