import Router, { Request, Response, NextFunction } from 'express';
import { CommentaireService } from '../services/commentaire_services';
import { CensureService } from '../services/censure_services';

const commentaireService = new CommentaireService();
const censureService = new CensureService();

export const router = Router();

router.get('/:id', async(request: Request, response: Response, next: NextFunction) => {
    // GET /commentaires/1

    try {
        const id = parseInt(request.params.id,10);
        const result = await commentaireService.getCommentaireById(id);
        const maskResult = await censureService.mask(result);
        response.json(maskResult);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get('', async (request: Request, response: Response, next: NextFunction) => {
    if (request.query.articleId) {
        // GET /commentaires?articleId=1
        const id = parseInt(request.query.articleId as string,10);

        commentaireService.getCommentairesByArticle(id)
        .then(result => censureService.mask(result))

        .then(result => response.json(result))
        .catch(next);

    } else {
        // GET /commentaires
        try {
            const result = await commentaireService.getListCommentaires();
            const maskResult = await censureService.mask(result);
            response.json(maskResult);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
});

router.post('', async (request: Request, response: Response, next: NextFunction) => {
    // POST /commentaires
    commentaireService.createCommentaire(request.body)
        .then(result => response.json(result))
        .catch(next);

});

router.put('/:id', async (request: Request, response: Response, next: NextFunction) => {
    // PUT /commentaires/1
    if (await censureService.checkComm(request.body)) {
        const id = parseInt(request.params.id,10);
        commentaireService.updateCommentaire(id, request.body)
        .then(result => response.json(result))
        .catch(next);

    } else {
        response.send('Contenu non autorisé');
    }
});

router.delete('/:id', (request: Request, response: Response, next: NextFunction) => {
    // DELETE /commentaires/1
    const id = parseInt(request.params.id,10);
    commentaireService.deleteCommentaire(id)
    .then(result => response.json(result))
    .catch(next);

});
