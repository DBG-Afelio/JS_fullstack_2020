const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

//create
router.post('', (req, res, next) => {
    const { order_id, option_id } = req.body;
    pool.query('INSERT INTO options_commandes (order_id, option_id) VALUES ($1, $2)', [order_id, option_id], (error, result) => {
        if (error) {
            console.log('error create', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//retrieve all
router.get('', (request, response, next) => {
    pool.query('SELECT * FROM options_commandes', (error, result) => {
        if (error) {
            return next(error);
        }
        response.status(200).json(result.rows);
    });
});

//retrieve 1
router.get('/:id', (req, res, next) => {
    pool.query(`SELECT * FROM options_commandes WHERE id = $1`, [parseInt(req.params.id)], (error, result) => {
        if (error) {
            return next(error);
        }
        res.status(200).json(result.rows);
    })
})

//update
router.put('/:id', (req, res, next) => {
    const { order_id, option_id } = req.body;
    pool.query('UPDATE options_commandes SET \
        order_id = $1, \
        option_id = $2 \
    WHERE id = $3', [order_id, option_id, parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error update', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//delete
router.delete('/:id', (req, res, next) => {
    pool.query('DELETE FROM options_commandes WHERE id = $1', [parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error delete', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

module.exports = router;