const pool = require('../db/pool');


/************
 *  ARTICLES 
 * */

/**
 * GET /articles
 * */ 
async function getAllArticles() {
    const returnValue = await pool.query(`SELECT * FROM articles`)
        .catch(error => {
            console.log('ERROR IN FUNCTION getAllArticles', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
    });
    return returnValue.rows;
}

/**
 * GET /articles/1
 * */ 
async function getArticleById(id) {
    const returnValue = await pool.query(`SELECT * FROM articles WHERE id = $1`, [id]);
    return returnValue.rows;
}

/**
 * POST /articles
 * */
async function addArticle(articleData) {
    console.log(articleData);
    const { titre, contenu, auteurs_id, date, publie } = articleData;
    await pool.query(`INSERT INTO articles (
        titre,
        contenu,
        auteurs_id,
        date,
        publie
        ) VALUES ($1, $2, $3, $4, $5)`,
        [titre, contenu, auteurs_id, date, publie]);
    
    const { rows } = await pool.query(`SELECT * FROM articles ORDER BY id DESC LIMIT 1`);
    return rows.length > 0 ? rows[0] : {};  
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