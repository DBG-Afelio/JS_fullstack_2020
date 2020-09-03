import Router, { Request, Response, NextFunction } from 'express';
import { CategorieService } from '../services/categorie_services';

export const router = Router();
const categorieService = new CategorieService();

router.get('/:id', (request: Request, response: Response, next: NextFunction) => {
    // GET /categories/1
    const id = parseInt(request.params.id, 10);
    categorieService.getCategorieById(id)
    .then(result => response.json(result))
    .catch(next);
});

router.get('', (request: Request, response: Response, next: NextFunction) => {
    // GET /categories
    categorieService.getListCategories()
    .then(result => response.json(result))
    .catch(next);
});

router.post('', (request: Request, response: Response, next: NextFunction) => {
   // POST /categories
   categorieService.createCategorie(request.body)
    .then(result => response.json(result))
    .catch(next);

});

router.put('/:id', (request: Request, response: Response, next: NextFunction) => {
    // PUT /categories/1
    const id = parseInt(request.params.id, 10);
    categorieService.updateCategorie(id, request.body)
    .then(result => response.json(result))
    .catch(next);
});

router.delete('/:id', (request: Request, response: Response, next: NextFunction) => {
    // DELETE /categories/1
    const id = parseInt(request.params.id, 10);
    categorieService.deleteCategorie(id)
    .then(result => response.json(result))
    .catch(next);
});
