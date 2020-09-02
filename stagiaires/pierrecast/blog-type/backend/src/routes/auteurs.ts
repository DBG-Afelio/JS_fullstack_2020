import Router from 'express';
import { pool } from '../db/pool';
import { getListAuteurs,
    getAuteurById,
    createAuteur,
    updateAuteur,
    deleteAuteur
} from '../services/auteurs_db';

export const router = Router();

router.get('/:id', (request, response, next) => {
    // GET /auteurs/1
    const id = parseInt(request.params.id,10);
    getAuteurById(id)
    .then(result => response.json(result))
    .catch(next);

});

router.get('', (request, response, next) => {
    // GET /auteurs
    getListAuteurs()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request, response, next) => {
   // POST /auteurs
    createAuteur(request.body)
    .then(result => response.json(result))
    .catch(next);

});

router.put('/:id', (request, response, next) => {
    // PUT /auteurs/1
    const id = parseInt(request.params.id,10);
    updateAuteur(id, request.body)
    .then(result => response.json(result))
    .catch(next);

});

router.delete('/:id', (request, response, next) => {
    // DELETE /auteurs/1
    const id = parseInt(request.params.id,10);
    deleteAuteur(id)
    .then(result => response.json(result))
    .catch(next);

});
