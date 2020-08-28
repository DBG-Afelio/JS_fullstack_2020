const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListCategories,
    getCategorieById, 
    createCategorie, 
    updateCategorie, 
    deleteCategorie } = require('../models/categories_db');

router.get('/:id', (request, response) => {
    // GET /categories/1
    const id = parseInt(request.params.id);
    getCategorieById(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.get('', (request, response) => {
    // GET /categories
    getListCategories()
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});

router.post('', (request, response) => {
   // POST /categories
    createCategorie(request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.put('/:id', (request, response) => {
    // PUT /categories/1
    const id = parseInt(request.params.id);
    updateCategorie(id, request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));

});

router.delete('/:id', (request, response) => {
    // DELETE /categories/1
    const id = parseInt(request.params.id);
    deleteCategorie(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));

});

module.exports = router;
