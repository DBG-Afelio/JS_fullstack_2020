const pool = require("../db/pool");
const { response } = require("express");
const {checkComm} = require('./censures_db')

async function getListCommentaires() {
    const value = await pool.query(`SELECT * FROM commentaires`)
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function getCommentairesByArticle(id) {
    const value = await pool.query(`SELECT * FROM commentaires WHERE article_id = $1 `, [id])
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function getCommentaireById(id) {
    const value = await pool.query(`SELECT * FROM commentaires WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function createCommentaire(body) {
    const { nom, prenom, titre, article_id, commentaire, date_ajout  } = body;
    if (! await checkComm(commentaire)){
        throw new Error('MOT_INTERDIT')
    }

    const value = await pool.query(`
        INSERT INTO commentaires (nom, prenom, titre,article_id, commentaire, date_ajout) VALUES ($1, $2, $3, $4, $5, $6)`,[nom, prenom, titre, article_id, commentaire, date_ajout] )
    .catch(error => {
        console.log(error.code);
        if (error.code.startsWith('22')){
            throw new Error('INVALID_DATA_FORMAT');
        }
        throw new Error('INSERTION');
    });
    return 'Commentaire crée !';

}

async function updateCommentaire(id, body) {
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
        throw new Error('Error');
    });
    return 'Commentaire modifié !';
}

async function deleteCommentaire(id) {
    const value = await pool.query(`
    DELETE FROM commentaires WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'Commentaire supprimé !';
}

module.exports = {
    getListCommentaires,
    getCommentairesByArticle,
    getCommentaireById, 
    createCommentaire, 
    updateCommentaire, 
    deleteCommentaire
};
