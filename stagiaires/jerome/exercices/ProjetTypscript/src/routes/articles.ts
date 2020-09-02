import { Router, Request, Response, NextFunction } from 'express';
import { ArticleService } from '../services/ArticleService';
export const router = Router();

const articleService= new ArticleService();


router.get('', (request:Request, response:Response, next:NextFunction) => {
    articleService.getAllArticles()
            .then(result=>response.json(result))
            .catch(next);
    });

router.get('/:id', (request:Request, response:Response, next:NextFunction) => {
    articleService.getArticleById(parseInt(request.params.id))
            .then(result=>response.json(result))
            .catch(next);
    });

router.post('', (request:Request, response:Response, next:NextFunction) => {
    articleService.postNewArticle(request.body.titre_article,request.body.contenu_article,request.body.date_article,request.body.publie_article,request.body.id_auteur_article)
            .then(result=>response.json(result))
            .catch(next);
    });

router.delete('/:id', (request:Request, response:Response, next:NextFunction) => {
    articleService.deleteArticle(parseInt(request.params.id))
            .then(result=>response.json(result))
            .catch(next);
    });

router.put('/:id', (request:Request, response:Response, next:NextFunction) => {
    articleService.modifieArticle(parseInt(request.params.id),request.body.titre_article,request.body.contenu_article,request.body.date_article,request.body.publie_article,request.body.id_auteur_article)
            .then(result=>response.json(result))
            .catch(next);
    });
