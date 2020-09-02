const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListCategoriesArticles,
    getCategoriesArticlesById, 
    createCategoriesArticles, 
    updateCategoriesArticles, 
    deleteCategoriesArticles } = require('../models/categories_articles_db');

router.get('/:id', (request, response) => {
    // GET /categories/1
    const id = parseInt(request.params.id);
    getCategoriesArticlesById(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});

router.get('', (request, response) => {
    // GET /categories
    getListCategoriesArticles()
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});

router.post('', (request, response) => {
   // POST /categories
   createCategoriesArticles(request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.put('/:id', (request, response) => {
    // PUT /categories/1
    const id = parseInt(request.params.id);
    updateCategoriesArticles(id, request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});

router.delete('/:id', (request, response) => {
    // DELETE /categories/1
    const id = parseInt(request.params.id);
    deleteCategoriesArticles(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});

module.exports = router;
