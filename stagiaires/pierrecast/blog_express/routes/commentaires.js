const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListCommentaires,
    getCommentairesByArticle,
    getCommentaireById, 
    createCommentaire, 
    updateCommentaire, 
    deleteCommentaire } = require('../models/commentaires_db');

const { mask } = require('../models/censures_db');

router.get('/:id', (request, response) => {
    // GET /commentaires/1
    const id = parseInt(request.params.id);
    getCommentaireById(id)
    .then(result => response.json(mask(result)))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.get('', async (request, response) => {
    if (request.query.article_id) {
        // GET /commentaires?article_id=1
        const id = parseInt(request.query.article_id);
       
        getCommentairesByArticle(id)
        .then(result => mask(result))
        .then(result => response.json(result))
        .catch(error => response.status(500).send('Erreur : ' + error));
    
    } else {
        // GET /commentaires
        try {
            const result = await getListCommentaires();
            const mask_result = await mask(result);
            response.json(mask_result);
        } catch (error) {
            console.log(error);
            response.status(500).send('Erreur');
        }
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
