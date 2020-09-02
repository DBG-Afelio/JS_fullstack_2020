import { Router, Request, Response, NextFunction } from 'express';
import { AuteurCommentaireService } from '../services/AuteurCommentaireService';
export const router = Router();

const auteurCommentaireService= new AuteurCommentaireService;
router.get('', (request:Request, response:Response, next:NextFunction) => {
    auteurCommentaireService.getAuteursCommentaires()
        .then(result=>response.json(result))
            .catch(next);
});

router.get('/:id', (request:Request, response:Response, next:NextFunction) => {
    auteurCommentaireService.getAuteurCommentairesById(parseInt(request.params.id))
        .then(result=>response.json(result))
            .catch(next);
});

router.post('', (request:Request, response:Response, next:NextFunction) => {
    auteurCommentaireService.postNewAuteurCommentaires(request.body.nom_auteur_commentaire,request.body.prenom_auteur_commentaire)
        .then(result=>response.json(result))
            .catch(next);
});

router.delete('/:id', (request:Request, response:Response, next:NextFunction) => {
    auteurCommentaireService.deleteAuteurCommentaires(parseInt(request.params.id))
        .then(result=>response.json(result))
            .catch(next);
});

router.put('/:id', (request:Request, response:Response, next:NextFunction) => {
    auteurCommentaireService.modifieAuteurCommentaires(parseInt(request.params.id),request.body.nom_auteur_commentaire,request.body.prenom_auteur_commentaire)
        .then(result=>response.json(result))
            .catch(next);
});

