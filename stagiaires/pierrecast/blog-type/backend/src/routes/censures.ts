import Router from 'express';
import { pool } from '../db/pool';
import { getListCensures,
    getForbiddenCensures,
    getCensureById,
    createCensure,
    updateCensure,
    deleteCensure
} from '../services/censures_db';

export const router = Router();

router.get('/interdit', (request, response, next) => {
    // GET /censures
    getForbiddenCensures()
    .then(result => response.json(result))
    .catch(next);
});


router.get('/:id', (request, response, next) => {
    // GET /censures/1
    const id = parseInt(request.params.id, 10);
    getCensureById(id)
    .then(result => response.json(result))
    .catch(next);

});

router.get('', (request, response, next) => {
    // GET /censures
    getListCensures()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request, response, next) => {
   // POST /censures
    createCensure(request.body)
    .then(result => response.json(result))
    .catch(next);

});

router.put('/:id', (request, response, next) => {
    // PUT /censures/1
    const id = parseInt(request.params.id,10);
    updateCensure(id, request.body)
    .then(result => response.json(result))
    .catch(next);
});

router.delete('/:id', (request, response, next) => {
    // DELETE /censures/1
    const id = parseInt(request.params.id,10);
    deleteCensure(id)
    .then(result => response.json(result))
    .catch(next);
});
