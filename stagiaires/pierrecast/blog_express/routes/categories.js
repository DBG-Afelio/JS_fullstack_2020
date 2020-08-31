const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListCategories,
    getCategorieById, 
    createCategorie, 
    updateCategorie, 
    deleteCategorie } = require('../models/categories_db');

router.get('/:id', (request, response, next) => {
    // GET /categories/1
    const id = parseInt(request.params.id);
    getCategorieById(id)
    .then(result => response.json(result))
    .catch(next);
});

router.get('', (request, response, next) => {
    // GET /categories
    getListCategories()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request, response, next) => {
   // POST /categories
    createCategorie(request.body)
    .then(result => response.json(result))
    .catch(next);
    
});

router.put('/:id', (request, response, next) => {
    // PUT /categories/1
    const id = parseInt(request.params.id);
    updateCategorie(id, request.body)
    .then(result => response.json(result))
    .catch(next);
});

router.delete('/:id', (request, response, next) => {
    // DELETE /categories/1
    const id = parseInt(request.params.id);
    deleteCategorie(id)
    .then(result => response.json(result))
    .catch(next);
});

module.exports = router;
