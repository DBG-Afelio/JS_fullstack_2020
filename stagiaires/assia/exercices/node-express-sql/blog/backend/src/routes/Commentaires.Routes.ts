import { Router } from 'express';
import { CommentairesService } from '../services/Commentaires.Queries';
export const router = Router();

const commentairesService = new CommentairesService();

router.get('', (request, response) => {
    commentairesService.getAllCommentaires()
        .then(result => response.json(result))
        .catch(error => response.status(500).send('error GET all commentaires'))
});

router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id, 10);
    commentairesService.getCommentaireById(id)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error GET commentaire ${id}`))
});

router.post('', (request, response) => {
    commentairesService.addCommentaire(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error POST commentaire`))
});

router.put('/:id', (request, response) => {
    commentairesService.updateCommentaire(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error PUT commentaire`))
});
// DELETE /commentaires/1
