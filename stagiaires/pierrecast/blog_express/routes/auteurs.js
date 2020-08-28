const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListAuteurs,
    getAuteurById, 
    createAuteur, 
    updateAuteur, 
    deleteAuteur } = require('../models/auteurs_db');

router.get('/:id', (request, response) => {
    // GET /auteurs/1
    const id = parseInt(request.params.id);
    getAuteurById(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.get('', (request, response) => {
    // GET /auteurs
    getListAuteurs()
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});

router.post('', (request, response) => {
   // POST /auteurs
    createAuteur(request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.put('/:id', (request, response) => {
    // PUT /auteurs/1
    const id = parseInt(request.params.id);
    updateAuteur(id, request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));

});

router.delete('/:id', (request, response) => {
    // DELETE /auteurs/1
    const id = parseInt(request.params.id);
    deleteAuteur(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));

});

module.exports = router;
