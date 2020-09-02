import Router from 'express';
import { pool } from '../db/pool';
import {
    getListCommentaires,
    getCommentairesByArticle,
    getCommentaireById,
    createCommentaire,
    updateCommentaire,
    deleteCommentaire
} from '../services/commentaires_db';

import {
    mask, checkComm
} from '../services/censures_db';

export const router = Router();

router.get('/:id', async(request, response, next) => {
    // GET /commentaires/1

    try {
        const id = parseInt(request.params.id,10);
        const result = await getCommentaireById(id);
        const maskResult = await mask(result);
        response.json(maskResult);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('', async (request, response, next) => {
    if (request.query.articleId) {
        // GET /commentaires?articleId=1
        const id = parseInt(request.query.articleId as string,10);

        getCommentairesByArticle(id)
        .then(result => mask(result))
        .then(result => response.json(result))
        .catch(next);

    } else {
        // GET /commentaires
        try {
            const result = await getListCommentaires();
            const maskResult = await mask(result);
            response.json(maskResult);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
});

router.post('', async (request, response, next) => {
    // POST /commentaires
        createCommentaire(request.body)
        .then(result => response.json(result))
        .catch(next);

});

router.put('/:id', async (request, response, next) => {
    // PUT /commentaires/1
    if (await checkComm(request.body)) {
        const id = parseInt(request.params.id,10);
        updateCommentaire(id, request.body)
        .then(result => response.json(result))
        .catch(next);

    } else {
        response.send('Contenu non autorisé');
    }
});

router.delete('/:id', (request, response, next) => {
    // DELETE /commentaires/1
    const id = parseInt(request.params.id,10);
    deleteCommentaire(id)
    .then(result => response.json(result))
    .catch(next);

});
