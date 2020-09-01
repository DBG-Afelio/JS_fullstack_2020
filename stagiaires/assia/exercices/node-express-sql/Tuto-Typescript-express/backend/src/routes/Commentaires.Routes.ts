import { Router } from 'express';
import { getAllCommentaires, getCommentaireById, addCommentaire, updateCommentaire } from '../services/Commentaires.Queries';
export const router = Router();


// GET /commentaires
router.get('', (request, response) => {
    getAllCommentaires()
        .then(result => response.json(result))
        .catch(error => response.status(500).send('error GET all commentaires'))
});

// GET /commentaires/1
router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    getCommentaireById(id)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error GET commentaire ${id}`))
});

// POST /commentaires
router.post('', (request, response) => {
    addCommentaire(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error POST commentaire`))
});

// PUT /commentaires/1
router.put('/:id', (request, response) => {
    updateCommentaire(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error PUT commentaire`))
});
// DELETE /commentaires/1
