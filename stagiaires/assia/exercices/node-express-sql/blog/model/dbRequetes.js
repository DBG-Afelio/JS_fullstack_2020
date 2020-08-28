const pool = require('../db/pool');

/-------------------------------- ARTICLES --------------------------------/
 
/**
 * GET /articles
 * */ 
async function getAllArticles() {
    const returnValue = await pool.query(`SELECT * FROM articles`)
        .catch(error => {
            console.log('Erreur dans la foncion getAllArticles()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
    });
    return returnValue.rows;
}

/**
 * GET /articles/1
 * */ 
async function getArticleById(id) {
    const returnValue = await pool.query(`SELECT * FROM articles WHERE id = $1`, [id])
        .catch(error => {
            console.log('Erreur dans la foncion getArticleById()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
        });
    return returnValue.rows[0];
}

/**
 * POST /articles
 * */
async function addArticle(articleData) {
    //create new article in db
    const { titre, contenu, auteurs_id, date, publie } = articleData.body;
    await pool.query(`INSERT INTO articles (
        titre,
        contenu,
        auteurs_id,
        date,
        publie
        ) VALUES ($1, $2, $3, $4, $5)`,
        [titre, contenu, auteurs_id, date, publie])
        .catch(error => {
            console.log('Erreur dans la foncion addArticle()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
        });
    // retrieve that created article
    const { rows } = await pool.query(`SELECT * FROM articles ORDER BY id DESC LIMIT 1`);
    return rows.length > 0 ? rows[0] : {};  
}

/**
 * PUT /articles/1
 * */
async function updateArticle(articleData) {
    //update article
    const { titre, contenu, auteurs_id, date, publie } = articleData.body;
    const id = parseInt(articleData.params.id);
    await pool.query(`UPDATE articles SET
        titre = $1,
        contenu = $2,
        auteurs_id = $3,
        date = $4,
        publie = $5,
        WHEN id = $6`,
        [titre, contenu, auteurs_id, date, publie, id])
        .catch(error => {
            console.log('Erreur dans la foncion updateArticle()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
        });
    // retrieve that updated article
    getArticleById(id)
        .then(result => {
            console.log(`Updated article with id ${id} : `, result);
            return result;
        })
        .catch(error => {
            console.log('Erreur dans la recup de l\'article updated : foncion updateArticle() > getArticleById()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
        });
    
    // const { rows } = await pool.query(`SELECT * FROM articles WHERE id = $1`, [id]);
    // return rows.length > 0 ? rows[0] : {};  
}

// DELETE /articles/1

/-------------------------------- COMMENTAIRES --------------------------------/
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
    addArticle,
    updateArticle,
};