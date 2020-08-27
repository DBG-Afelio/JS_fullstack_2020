const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListArticles } = require('../models/articles_db.js');

router.get('', (request, response, next) => {
    getListArticles();
    response.send('ok');
});


/*
GET /articles
GET /articles/1
GET /articles?auteur_id=1
GET /articles?page=1&par_page=10
POST /articles
PUT /articles/1
DELETE /articles/1
*/

module.exports = router;