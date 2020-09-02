import Router, { Request, Response, NextFunction } from 'express';
import { CatArticleService } from '../services/cat_article_services';

export const router = Router();
const catArticleService = new CatArticleService();

router.get('/:id', (request: Request, response: Response, next: NextFunction) => {
    // GET /categories/1
    const id = parseInt(request.params.id, 10);
    catArticleService.getCategoriesArticlesById(id)
    .then(result => response.json(result))
    .catch(next);
});

router.get('', (request: Request, response: Response, next: NextFunction) => {
    // GET /categories
    catArticleService.getListCategoriesArticles()
    .then(result => response.json(result))
    .catch(next);
});
/*
router.post('', (request: Request, response: Response, next: NextFunction) => {
    // POST /categories
    catArticleService.createCategoriesArticles(request.body, request.query.article_id)
    .then(result => response.json(result))
    .catch(next);

});*/

router.delete('/:id', (request: Request, response: Response, next: NextFunction) => {
    // DELETE /categories/1
    const id = parseInt(request.params.id, 10);
    catArticleService.deleteCategoriesArticles(id)
    .then(result => response.json(result))
    .catch(next);
});
