const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

//create
router.post('', (req, res, next) => {
    const { product_id, nom, surcout } = req.body;
    pool.query('INSERT INTO options (product_id, nom, surcout) VALUES ($1, $2, $3)', [product_id, nom, surcout], (error, result) => {
        if (error) {
            console.log('error create', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//retrieve all
router.get('', (request, response, next) => {
    pool.query('SELECT * FROM options', (error, result) => {
        if (error) {
            return next(error);
        }
        response.status(200).json(result.rows);
    });
});

//retrieve 1
router.get('/:id', (req, res, next) => {
    pool.query(`SELECT * FROM options WHERE id = $1`, [parseInt(req.params.id)], (error, result) => {
        if (error) {
            return next(error);
        }
        res.status(200).json(result.rows);
    })
})

//update
router.put('/:id', (req, res, next) => {
    const { product_id, nom, surcout } = req.body;
    pool.query('UPDATE options SET \
        product_id = $1, \
        nom = $2, \
        surcout = $3 \
    WHERE id = $4', [product_id, nom, surcout, parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error update', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//delete
router.delete('/:id', (req, res, next) => {
    pool.query('DELETE FROM options WHERE id = $1', [parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error delete', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

module.exports = router;