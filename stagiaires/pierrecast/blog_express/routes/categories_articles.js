const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListCategoriesArticles,
    getCategoriesArticlesById, 
    createCategoriesArticles, 
    updateCategoriesArticles, 
    deleteCategoriesArticles } = require('../models/categories_articles_db');

router.get('/:id', (request, response, next) => {
    // GET /categories/1
    const id = parseInt(request.params.id);
    getCategoriesArticlesById(id)
    .then(result => response.json(result))
    .catch(next);
});

router.get('', (request, response, next) => {
    // GET /categories
    getListCategoriesArticles()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request, response, next) => {
   // POST /categories
   createCategoriesArticles(request.body)
    .then(result => response.json(result))
    .catch(next);
    
});

router.put('/:id', (request, response, next) => {
    // PUT /categories/1
    const id = parseInt(request.params.id);
    updateCategoriesArticles(id, request.body)
    .then(result => response.json(result))
    .catch(next);
});

router.delete('/:id', (request, response, next) => {
    // DELETE /categories/1
    const id = parseInt(request.params.id);
    deleteCategoriesArticles(id)
    .then(result => response.json(result))
    .catch(next);
});

module.exports = router;
