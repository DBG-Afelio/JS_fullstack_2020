const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

//create
router.post('', (request, response, next) => {
    const { nom, description, ferme, archive , tel, horaire } = request.body;
    pool.query('INSERT INTO fournisseurs (nom, description, ferme, archive , tel, horaire) VALUES ($1, $2, $3, $4, $5, $6)', [nom, description, ferme, archive, tel, horaire], (error, result) => {
        if (error) {
            console.log('error create', error);
            return next(error);
        }
        response.status(200).json(result.rows);
    } );
});

//retrieve all
router.get('', (request, response, next) => {
    pool.query('SELECT * FROM fournisseurs', (error, result) => {
        if (error) {
            return next(error);
        }
        response.json(result.rows);
    });
});

//retrieve 1
router.get('/:id', (request, response, next) => {
    pool.query('SELECT * FROM fournisseurs WHERE id = $1', [request.params.id], (error, result) => {
        if (error) {
            return next(error);
        }
        response.json(result.rows);
    });
});

//update
router.put('/:id', (req, res, next) => {
    const { nom, description, ferme, archive , tel, horaire } = req.body;
    pool.query('UPDATE fournisseurs SET \
        nom = $1, \
        description = $2, \
        ferme = $3, \
        archive = $4, \
        tel = $5, \
        horaire = $6 \
    WHERE id = $7', [nom, description, ferme, archive , tel, horaire, parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error update', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//delete
router.delete('/:id', (req, res, next) => {
    pool.query('DELETE FROM fournisseurs WHERE id = $1', [parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error delete', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

module.exports = router;