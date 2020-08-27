const pool = require("../db/pool");

async function getListArticles() {
    return new Promise((resolve, reject) => {
        await pool.query(``)
        
        if (isEven) {
            resolve([1000, "Success"]);
        } else {
            reject([1000, "Error"]);
        }
    });
}

function getListArticles() {

}

function getArticleById() {

}

module.export = {
    getListArticles,
    getArticleById
};
