import { Router, Request, Response, NextFunction } from 'express';
import { CommentaireService } from '../services/CommentaireService';
export const router = Router();

const commentaireService= new CommentaireService();


router.get('', (request:Request, response:Response, next:NextFunction) => {
    commentaireService.getAllCommentaires()
        .then(result=>response.json(result))
            .catch(next);
});

router.get('/:id', (request:Request, response:Response, next:NextFunction) => {
    commentaireService.getCommentaireById(parseInt(request.params.id))
        .then(result=>response.json(result))
            .catch(next);
});

router.post('', (request:Request, response:Response, next:NextFunction) => {
    commentaireService.postNewCommentaire(request.body.titre_commentaire,request.body.date,request.body.id_auteur_commentaire,request.body.id_article)
        .then(result=>response.json(result))
            .catch(next);
});

router.delete('/:id', (request:Request, response:Response, next:NextFunction) => {
    commentaireService.deleteCommentaire(parseInt(request.params.id))
        .then(result=>response.json(result))
            .catch(next);
});

router.put('/:id', (request:Request, response:Response, next:NextFunction) => {
    commentaireService.modifieCommentaire(parseInt(request.params.id),request.body.titre_commentaire,request.body.date,request.body.id_auteur_commentaire,request.body.id_article)
        .then(result=>response.json(result))
            .catch(next);
});


