import { Router } from 'express';
import { CensuresService } from '../services/Censures.Queries';
export const router = Router();

const censuresService = new CensuresService();

router.get('', (request, response) => {
    // getOnlyForbidden()
    // getOnlyWordsToHide()
    censuresService.getAllCensures()
        .then(result => {
            response.json(result);
            console.log('********* Get all censures SUCCEED');
        })
        .catch(error => response.status(500).send('error GET all censures'))
});


router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id, 10);
    censuresService.getCensureById(id)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error GET censure ${id}`))
});


router.post('', async (request, response) => {
    await censuresService.addCensure(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error POST censure`))
});


router.put('/:id', (request, response) => {
    censuresService.updateCensure(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error PUT censure`))
});
// DELETE /censures/1
