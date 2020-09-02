import { Router, Request, Response, NextFunction } from 'express';
import {CategorieService} from '../services/CategorieService';
export const router = Router();

const categorieService= new CategorieService();


router.get('', (request:Request, response:Response, next:NextFunction) => {
    categorieService.getAllCategories()
        .then(result=>response.json(result))
            .catch(next);
});

router.get('/:id', (request:Request, response:Response, next:NextFunction) => {
    categorieService.getCategorieById(parseInt(request.params.id))
        .then(result=>response.json(result))
            .catch(next);
});

router.post('', (request:Request, response:Response, next:NextFunction) => {
    categorieService.postNewCategories(request.body.nom_categories)
        .then(result=>response.json(result))
            .catch(next);
});

router.delete('/:id', (request:Request, response:Response, next:NextFunction) => {
    categorieService.deleteCategories(parseInt(request.params.id))
        .then(result=>response.json(result))
            .catch(next);
});

router.put('/:id', (request:Request, response:Response, next:NextFunction) => {
    categorieService.modifieCategories(parseInt(request.params.id),request.body.nom_categories)
        .then(result=>response.json(result))
            .catch(next);
});
