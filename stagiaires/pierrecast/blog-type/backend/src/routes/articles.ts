import Router, { Request, Response, NextFunction } from 'express';
import { pool } from '../db/pool';
import {
    getListArticles,
    getArticleById,
    getArticleByAuteur,
    getArticleByPage,
    createArticle,
    updateArticle,
    deleteArticle, getInsertId
} from '../services/articles_db';

import {
    createCategoriesArticles,
    deleteAllCategoriesFromArticle
} from '../services/categories_articles_db';

export const router = Router();

router.get('/:id', (request, response, next) => {
    // GET /articles/1
    const id = parseInt(request.params.id,10);
    getArticleById(id)
    .then(result => response.json(result))
    .catch(next);

});

router.get('', (request: Request, response: Response, next: NextFunction) => {
    if (request.query.auteur_id) {
        // GET /articles?auteurId=1
        const id = parseInt(request.query.auteur_id as string ,10);
        getArticleByAuteur(id)
        .then(result => response.json(result))
        .catch(next);
    } else if (request.query.page && request.query.parPage) {
         // GET /articles?page=1&parPage=10
         const page = parseInt(request.query.page as string, 10);
         const parPage = parseInt(request.query.par_page as string, 10);
         getArticleByPage(page, parPage)
        .then(result => response.json(result))
        .catch(next);
    } else {
        // GET /articles
        getListArticles()
        .then(result => response.json(result))
        .catch(next);
    }
});

router.post('', async (request, response, next) => {
   // POST /articles

    try {
        await createArticle(request.body);
        const articleId = await getInsertId();
        await createCategoriesArticles(request.body.categories, articleId);

        response.send('insertion Articles et Catégories associées réussie');
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.put('/:id', async (request, response, next) => {
    // PUT /articles/1
    const articleId = parseInt(request.params.id,10);
    try {
        await updateArticle(articleId, request.body)
        await deleteAllCategoriesFromArticle(articleId);
        await createCategoriesArticles(request.body.categories, articleId);

        response.send('mise à jour Articles et Catégories associées réussie');
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.delete('/:id', (request, response, next) => {
    // DELETE /articles/1
    const id = parseInt(request.params.id,10);
    deleteArticle(id)
    .then(result => response.json(result))
    .catch(next);

});
