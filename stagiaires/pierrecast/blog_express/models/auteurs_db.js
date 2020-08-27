const pool = require("../db/pool");
const { response } = require("express");

async function getListAuteurs() {
    const value = await pool.query(`SELECT * FROM auteurs`)
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function getAuteurById(id) {
    const value = await pool.query(`SELECT * FROM auteurs WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function createAuteur(body) {
    const { nom, prenom, email, presentation  } = body;
    const value = await pool.query(`
        INSERT INTO auteurs (nom, prenom, email, presentation) VALUES ($1, $2, $3, $4, $5)`,[titre, contenu ,auteur_id,date, publie] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'Auteur crée !';
}

async function updateAuteur(id, body) {
    const { nom, prenom, email, presentation  } = body;
    const value = await pool.query(`
        UPDATE auteurs SET 
        nom = $1, 
        prenom = $2, 
        presentation = $3, 
        date  = $4
    WHERE id = $5`,
[nom, prenom, email, presentation, id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'Auteur modifié !';
}

async function deleteAuteur(id) {
    
    const value = await pool.query(`
    DELETE FROM auteurs WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'Auteur supprimé !';
}

module.exports = {
    getListAuteurs,
    getAuteurById, 
    createAuteur, 
    updateAuteur, 
    deleteAuteur
};
