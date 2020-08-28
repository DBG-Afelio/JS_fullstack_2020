const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListCommentaires,
    getCommentairesByArticle,
    getCommentaireById, 
    createCommentaire, 
    updateCommentaire, 
    deleteCommentaire } = require('../models/commentaires_db');

router.get('/:id', (request, response) => {
    // GET /commentaires/1
    const id = parseInt(request.params.id);
    getCommentaireById(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.get('', (request, response) => {
    if (request.query.article_id) {
        // GET /articles?auteur_id=1
        const id = parseInt(request.query.article_id);
        getCommentairesByArticle(id)
        .then(result => response.json(result))
        .catch(error => response.status(500).send('Erreur'));
    
    } else {
       // GET /commentaires
        getListCommentaires()
        .then(result => response.json(result))
        .catch(error => response.status(500).send('Erreur'));
    }
    
});

router.post('', (request, response) => {
   // POST /commentaires
    createCommentaire(request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.put('/:id', (request, response) => {
    // PUT /commentaires/1
    const id = parseInt(request.params.id);
    updateCommentaire(id, request.body)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));

});

router.delete('/:id', (request, response) => {
    // DELETE /commentaires/1
    const id = parseInt(request.params.id);
    deleteCommentaire(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));

});

module.exports = router;
