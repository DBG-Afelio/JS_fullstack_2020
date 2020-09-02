import { Router, Request, Response, NextFunction } from 'express';
import { ForbiddenWordService } from '../services/ForbiddenWordService';
export const router = Router();

const forbiddenWordService= new ForbiddenWordService();
router.get('', (request:Request, response:Response, next:NextFunction) => {
    forbiddenWordService.getAllForbiddenWords()
        .then(result=>response.json(result))
            .catch(next);
});

router.get('/:id', (request:Request, response:Response, next:NextFunction) => {
    forbiddenWordService.getForbiddenWordsById(parseInt(request.params.id))
        .then(result=>response.json(result))
            .catch(next);
});

router.post('', (request:Request, response:Response, next:NextFunction) => {
    forbiddenWordService.postNewForbiddenWords(request.body.word)
        .then(result=>response.json(result))
            .catch(next);
});

router.delete('/:id', (request:Request, response:Response, next:NextFunction) => {
    forbiddenWordService.deleteForbiddenWords(parseInt(request.params.id))
        .then(result=>response.json(result))
            .catch(next);
});

router.put('/:id', (request:Request, response:Response, next:NextFunction) => {
    forbiddenWordService.modifieForbiddenWords(parseInt(request.params.id),request.body.word)
        .then(result=>response.json(result))
            .catch(next);
});
