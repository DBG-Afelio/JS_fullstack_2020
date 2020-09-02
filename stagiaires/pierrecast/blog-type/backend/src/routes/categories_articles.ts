import Router from 'express';
import { pool } from '../db/pool';
import { getListCategoriesArticles,
    getCategoriesArticlesById,
    createCategoriesArticles,
    deleteCategoriesArticles
} from '../services/categories_articles_db';

export const router = Router();

router.get('/:id', (request, response, next) => {
    // GET /categories/1
    const id = parseInt(request.params.id, 10);
    getCategoriesArticlesById(id)
    .then(result => response.json(result))
    .catch(next);
});

router.get('', (request, response, next) => {
    // GET /categories
    getListCategoriesArticles()
    .then(result => response.json(result))
    .catch(next);
});
/*
router.post('', (request, response, next) => {
    // POST /categories
    createCategoriesArticles(request.body, request.query.article_id)
    .then(result => response.json(result))
    .catch(next);

});*/

router.delete('/:id', (request, response, next) => {
    // DELETE /categories/1
    const id = parseInt(request.params.id, 10);
    deleteCategoriesArticles(id)
    .then(result => response.json(result))
    .catch(next);
});
