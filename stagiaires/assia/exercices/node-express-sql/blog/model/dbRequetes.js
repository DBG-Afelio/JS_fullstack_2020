const pool = require('../db/pool');


/************
 *  ARTICLES 
 * */

/**
 * GET /articles
 * */ 
async function getAllArticles() {
    const returnValue = await pool.query(`SELECT * FROM articles`);
    return returnValue.rows;
}

/**
 * GET /articles/1
 * */ 
async function getArticleById(id) {
    const returnValue = await pool.query(`SELECT * FROM articles WHERE id = ${id}`);
    return returnValue.rows;
}

/**
 * POST /articles
 * */
async function addArticle(article) {
    const returnValue = await pool.query(`INSERT INTO articles (
        titre,
        contenu,
        auteurs_id,
        date,
        publie
        ) VALUES ${article.titre, article.contenu, article.auteurs_id, article.date, article.publie}`);
    return returnValue.rows;  
}
// PUT /articles/1
// DELETE /articles/1


/************
 *  COMMENTAIRES 
 * */
// GET /commentaires
// GET /commentaires/1
// POST /commentaires
// PUT /commentaires/1
// DELETE /commentaires/1

// GET /auteurs
// GET /auteurs/1
// POST /auteurs
// DELETE /auteurs/1
// PUT / auteurs / 1

module.exports = {
    getAllArticles,
    getArticleById,
    addArticle
};