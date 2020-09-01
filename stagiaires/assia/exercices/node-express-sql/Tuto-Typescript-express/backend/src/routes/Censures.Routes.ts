import { Router } from 'express';
import { getAllCensures, getCensureById, addCensure, updateCensure, getOnlyForbidden, getOnlyWordsToHide } from '../services/Censures.Queries';
export const router = Router();

// GET /censures
router.get('', (request, response) => {
    //getOnlyForbidden()
    //getOnlyWordsToHide()
    getAllCensures()
        .then(result => {
            response.json(result);
            console.log('********* Get all censures SUCCEED');
        })
        .catch(error => response.status(500).send('error GET all censures'))
});

// GET /censures/1
router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    getCensureById(id)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error GET censure ${id}`))
});

// POST /censures
router.post('', async (request, response) => {
    await addCensure(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error POST censure`))
});

// PUT /censures/1
router.put('/:id', (request, response) => {
    updateCensure(request)
        .then(result => response.json(result))
        .catch(error => response.status(500).send(`error PUT censure`))
});
// DELETE /censures/1
