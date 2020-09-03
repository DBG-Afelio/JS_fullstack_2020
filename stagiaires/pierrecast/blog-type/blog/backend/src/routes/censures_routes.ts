import Router, { Request, Response, NextFunction } from 'express';
import { pool } from '../db/pool';
import { CensureService } from '../services/censure_services';

export const router = Router();
const censureService = new CensureService();

router.get('/interdit', (request: Request, response: Response, next: NextFunction) => {
    // GET /censures
    censureService.getForbiddenCensures()
    .then(result => response.json(result))
    .catch(next);
});


router.get('/:id', (request: Request, response: Response, next: NextFunction) => {
    // GET /censures/1
    const id = parseInt(request.params.id, 10);
    censureService.getCensureById(id)
    .then(result => response.json(result))
    .catch(next);

});

router.get('', (request: Request, response: Response, next: NextFunction) => {
    // GET /censures
    censureService.getListCensures()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request: Request, response: Response, next: NextFunction) => {
   // POST /censures
   censureService.createCensure(request.body)
    .then(result => response.json(result))
    .catch(next);

});

router.put('/:id', (request: Request, response: Response, next: NextFunction) => {
    // PUT /censures/1
    const id = parseInt(request.params.id,10);
    censureService.updateCensure(id, request.body)
    .then(result => response.json(result))
    .catch(next);
});

router.delete('/:id', (request: Request, response: Response, next: NextFunction) => {
    // DELETE /censures/1
    const id = parseInt(request.params.id,10);
    censureService.deleteCensure(id)
    .then(result => response.json(result))
    .catch(next);
});
