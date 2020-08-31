const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListAuteurs,
    getAuteurById, 
    createAuteur, 
    updateAuteur, 
    deleteAuteur } = require('../models/auteurs_db');

router.get('/:id', (request, response, next) => {
    // GET /auteurs/1
    const id = parseInt(request.params.id);
    getAuteurById(id)
    .then(result => response.json(result))
    .catch(next);
    
});

router.get('', (request, response, next) => {
    // GET /auteurs
    getListAuteurs()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request, response, next) => {
   // POST /auteurs
    createAuteur(request.body)
    .then(result => response.json(result))
    .catch(next);
    
});

router.put('/:id', (request, response, next) => {
    // PUT /auteurs/1
    const id = parseInt(request.params.id);
    updateAuteur(id, request.body)
    .then(result => response.json(result))
    .catch(next);

});

router.delete('/:id', (request, response, next) => {
    // DELETE /auteurs/1
    const id = parseInt(request.params.id);
    deleteAuteur(id)
    .then(result => response.json(result))
    .catch(next);

});

module.exports = router;
