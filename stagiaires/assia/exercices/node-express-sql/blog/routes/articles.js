const { Router } = require('express');
//const pool = require('../db/pool');
const router = Router();
const { getAllArticles, getArticleById, addArticle, updateArticle } = require('../model/dbRequetes');

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
        // .then(result => response.json(result))
        // .catch(error => response.status(500).send(`error GET article ${id}`))
});

// POST /articles
router.post('', (request, response) => {
    addArticle(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error POST article}`))
});

// PUT /articles/1
router.put('/:id', (request, response) => {
    addArticle(request)
        .then(result => response.json(result))
        .catch(error => response.send(`error PUT article ${id}`))
});
// DELETE /articles/1

module.exports = router;