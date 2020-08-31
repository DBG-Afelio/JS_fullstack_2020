const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListCensures,
    getForbiddenCensures,
    getCensureById, 
    createCensure, 
    updateCensure, 
    deleteCensure } = require('../models/censures_db');


router.get('/interdit', (request, response, next) => {
    // GET /censures
    getForbiddenCensures()
    .then(result => response.json(result))
    .catch(next);
});


router.get('/:id', (request, response, next) => {
    // GET /censures/1
    const id = parseInt(request.params.id);
    getCensureById(id)
    .then(result => response.json(result))
    .catch(next);

});

router.get('', (request, response, next) => {
    // GET /censures
    getListCensures()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request, response, next) => {
   // POST /censures
    createCensure(request.body)
    .then(result => response.json(result))
    .catch(next);
    
});

router.put('/:id', (request, response, next) => {
    // PUT /censures/1
    const id = parseInt(request.params.id);
    updateCensure(id, request.body)
    .then(result => response.json(result))
    .catch(next);
});

router.delete('/:id', (request, response, next) => {
    // DELETE /censures/1
    const id = parseInt(request.params.id);
    deleteCensure(id)
    .then(result => response.json(result))
    .catch(next);
});

module.exports = router;
