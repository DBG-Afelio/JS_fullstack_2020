import { Router, Request, Response, NextFunction } from 'express';
import { AuteurArticleService } from '../services/AuteurArticleService';
export const router = Router();

const auteurArticleService= new AuteurArticleService();



router.get('', (request:Request, response:Response, next:NextFunction) => {
    auteurArticleService.getAllAuteursArticles()
        .then(result=>response.json(result))
        .catch(next);
});

router.get('/:id', (request:Request, response:Response, next:NextFunction) => {
    auteurArticleService.getAuteurArticlesById(parseInt(request.params.id))
        .then(result=>response.json(result))
        .catch(next);
});

router.post('', (request:Request, response:Response, next:NextFunction) => {
    auteurArticleService.postNewAuteurArticles(request.body.nom_auteur_articles,request.body.prenom_auteur_articles,request.body.email_auteur_articles,request.body.presentation_auteur_articles)
        .then(result=>response.json(result))
        .catch(next);
});

router.delete('/:id', (request:Request, response:Response, next:NextFunction) => {
    auteurArticleService.deleteAuteurArticles(parseInt(request.params.id))
        .then(result=>response.json(result))
        .catch(next);
});

router.put('/:id', (request:Request, response:Response, next:NextFunction) => {
    auteurArticleService.modifieAuteurArticles(parseInt(request.params.id),request.body.nom_auteur_articles,request.body.prenom_auteur_articles,request.body.email_auteur_articles,request.body.presentation_auteur_articles)
        .then(result=>response.json(result))
        .catch(next);
});
