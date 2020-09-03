import Router, { Request, Response, NextFunction } from 'express';
import { AuteurService } from '../services/auteur_services';

const auteurService = new AuteurService();
export const router = Router();

router.get('/:id', (request: Request, response: Response, next: NextFunction) => {
    // GET /auteurs/1
    const id = parseInt(request.params.id,10);
    auteurService.getAuteurById(id)
    .then(result => response.json(result))
    .catch(next);

});

router.get('', (request: Request, response: Response, next: NextFunction) => {
    // GET /auteurs
    auteurService.getListAuteurs()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request: Request, response: Response, next: NextFunction) => {
   // POST /auteurs
   auteurService.createAuteur(request.body)
    .then(result => response.json(result))
    .catch(next);

});

router.put('/:id', (request: Request, response: Response, next: NextFunction) => {
    // PUT /auteurs/1
    const id = parseInt(request.params.id,10);
    auteurService.updateAuteur(id, request.body)
    .then(result => response.json(result))
    .catch(next);

});

router.delete('/:id', (request: Request, response: Response, next: NextFunction) => {
    // DELETE /auteurs/1
    const id = parseInt(request.params.id,10);
    auteurService.deleteAuteur(id)
    .then(result => response.json(result))
    .catch(next);

});
