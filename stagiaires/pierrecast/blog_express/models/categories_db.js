const pool = require("../db/pool");
const { response } = require("express");
const { getCodeError } = require("./error_handlers");

async function getListCategories() {
    const value = await pool.query(`SELECT * FROM categories`)
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

async function getCategorieById(id) {
    const value = await pool.query(`SELECT * FROM categories WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

async function createCategorie(body) {
    const { libelle, description  } = body;
    const value = await pool.query(`
        INSERT INTO categories (libelle, description) VALUES ($1, $2, $3, $4, $5, $6)`,[libelle, description] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Categorie crée !';
}

async function updateCategorie(id, body) {
    const { libelle, description  } = body;
    const value = await pool.query(`
        UPDATE categories SET 
        libelle = $1, 
        description = $2
    WHERE id = $3`,
[libelle, description, id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Categorie modifié !';
}

async function deleteCategorie(id) {
    const value = await pool.query(`
    DELETE FROM categories WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Categorie supprimé !';
}

module.exports = {
    getListCategories,
    getCategorieById, 
    createCategorie, 
    updateCategorie, 
    deleteCategorie
};
