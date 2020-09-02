import { Router } from 'express';
import { getAllArticles, getArticleById, addArticle, updateArticle } from '../services/Articles.Queries';
export const router = Router();
// GET /articles
router.get('', (request, response) => {
    getAllArticles()
        .then(result => response.json(result))
        .catch(error => response.status(500).send('error GET all articles'))
});

// GET /articles/1
router.get('/:id', (request, response) => {
    const id:number = parseInt(request.params.id, 10);
    getArticleById(id)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error GET article ${id}`))
});

// POST /articles
router.post('', (request, response) => {
    addArticle(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error POST article}`))
});

// PUT /articles/1
router.put('/:id', (request, response) => {
    updateArticle(request)
        .then(result => response.json(result))
        .catch(error => {
            console.log('errueru ligne 32',error);
            if (error === 'Error: 404') { // condition foireuse, marche pas
                response.status(404).send(`Auteur inexistant`);
            } else {
                response.status(500).send(`autre erreur`);
            }
        })
});
// DELETE /articles/1

