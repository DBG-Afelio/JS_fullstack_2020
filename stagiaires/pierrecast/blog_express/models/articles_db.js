const pool = require("../db/pool");
const { response } = require("express");

async function getListArticles() {
    console.log('function');
    const value = await pool.query(`SELECT * FROM articles`)
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
console.log(value.rows);
    return value.rows;
}

function getArticleById(id) {
    //pool.query(`SELECT * FROM articles WHERE id = $1, [id]`)
}

module.export = {
    getListArticles,
    getArticleById
};
