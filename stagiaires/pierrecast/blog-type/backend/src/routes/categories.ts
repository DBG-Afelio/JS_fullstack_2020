import Router from 'express';
import { pool } from '../db/pool';
import {
    getListCategories,
    getCategorieById,
    createCategorie,
    updateCategorie,
    deleteCategorie
} from '../services/categories_db';

export const router = Router();

router.get('/:id', (request, response, next) => {
    // GET /categories/1
    const id = parseInt(request.params.id, 10);
    getCategorieById(id)
    .then(result => response.json(result))
    .catch(next);
});

router.get('', (request, response, next) => {
    // GET /categories
    getListCategories()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request, response, next) => {
   // POST /categories
    createCategorie(request.body)
    .then(result => response.json(result))
    .catch(next);

});

router.put('/:id', (request, response, next) => {
    // PUT /categories/1
    const id = parseInt(request.params.id, 10);
    updateCategorie(id, request.body)
    .then(result => response.json(result))
    .catch(next);
});

router.delete('/:id', (request, response, next) => {
    // DELETE /categories/1
    const id = parseInt(request.params.id, 10);
    deleteCategorie(id)
    .then(result => response.json(result))
    .catch(next);
});
