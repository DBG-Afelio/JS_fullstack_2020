const pool = require("../db/pool");
const { response } = require("express");

async function getListArticles() {
    const value = await pool.query(`SELECT * FROM articles`)
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function getArticleById(id) {
    const value = await pool.query(`SELECT * FROM articles WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function getArticleByAuteur(id) {
    const value = await pool.query(`SELECT * FROM articles WHERE auteur_id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function getArticleByPage(page, par_page) {
    const value = await pool.query(`
        SELECT * FROM articles  
        LIMIT $2 OFFSET ($1-1)*$2`, [page, par_page])
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function createArticle(body) {
    const { titre, contenu, auteur_id, date, publie  } = body;
    const value = await pool.query(`
        INSERT INTO articles (titre, contenu ,auteur_id,date, publie) 
        VALUES ($1, $2, $3, $4, $5)
        `,[titre, contenu ,auteur_id,date, publie] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    console.log('Article crée !');
    return 'Article crée !';
}

async function updateArticle(id, body) {
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
        throw new Error('Error');
    });
    return 'Article modifié !';
}

async function deleteArticle(id) {
    
    const value = await pool.query(`
    DELETE FROM articles WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'Article supprimé !';
}


async function getInsertId() {
    const value = await pool.query(`SELECT MAX(id) FROM articles`)
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    console.log('Article_id :', value.rows[0].max);
    return value.rows[0].max;
}

module.exports = {
    getListArticles,
    getArticleById, 
    getArticleByAuteur,
    getArticleByPage,
    createArticle, 
    updateArticle, 
    deleteArticle, 
    getInsertId
};
