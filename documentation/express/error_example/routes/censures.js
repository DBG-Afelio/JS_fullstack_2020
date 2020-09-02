const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListCensures,
    getForbiddenCensures,
    getCensureById, 
    createCensure, 
    updateCensure, 
    deleteCensure } = require('../models/censures_db');


router.get('/interdit', (request, response) => {
    // GET /censures
    getForbiddenCensures()
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});


router.get('/:id', (request, response) => {
    // GET /censures/1
    const id = parseInt(request.params.id);
    getCensureById(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));

});

router.get('', (request, response) => {
    // GET /censures
    getListCensures()
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});

router.post('', (request, response) => {
   // POST /censures
    createCensure(request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.put('/:id', (request, response) => {
    // PUT /censures/1
    const id = parseInt(request.params.id);
    updateCensure(id, request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});

router.delete('/:id', (request, response) => {
    // DELETE /censures/1
    const id = parseInt(request.params.id);
    deleteCensure(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
});

module.exports = router;
