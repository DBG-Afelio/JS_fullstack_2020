const { Router } = require('express');
//const pool = require('../db/pool');
const router = Router();
const { getAllArticles, getArticleById, addArticle } = require('../model/dbRequetes');

// GET /articles
router.get('', (request, response) => {
    getAllArticles()
        .then(result => response.json(result))
        .catch(error => response.status(500).send('error GET all articles'))
});

// GET /articles/1
router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    getArticleById(id)
        .then(result => response.json(result))
        .catch(error => response.send(`error GET article ${id}`))
});

// POST /articles
router.post('', (request, response) => {
    addArticle(request.body)
        .then(result => response.json(result))
        .catch(error => response.send(`error POST article}`))
});

// PUT /articles/1
// DELETE /articles/1

module.exports = router;