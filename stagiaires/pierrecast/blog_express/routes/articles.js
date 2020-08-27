const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListArticles } = require('../models/articles_db');

router.get('', (request, response) => {
    console.log('route');
    getListArticles()
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
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