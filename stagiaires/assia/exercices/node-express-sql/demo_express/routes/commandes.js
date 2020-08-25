const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

//create
router.post('', (req, res, next) => {
    const { user_id, product_id, paye, date } = req.body;
    pool.query(`
        INSERT INTO commandes (user_id, product_id, paye, date) VALUES 
        ($1, $2, $3, $4)
    `, [user_id, product_id, paye, date], (error, result) => {
    if (error) {
        console.log('error create', error);
        return next(error);
    }
    res.status(200).json(result.rows);
    });
});

//retrieve all
router.get('', (request, response, next) => {
    pool.query(`
        SELECT *
        FROM commandes
        JOIN utilisateurs 
            ON commandes.user_id = utilisateurs.id
        JOIN produits 
            ON commandes.product_id = produits.id
        JOIN option_commandees
            ON commandes.id = option_commandees.order_id
    `, (error, result) => {
        if (error) {
            return next(error);
        }
        response.status(200).json(result.rows);
    });
});

//retrieve 1
router.get('/:id', (req, res, next) => {
    pool.query(`
        SELECT * 
        FROM commandes
        JOIN utilisateurs 
            ON commandes.user_id = utilisateurs.id
        JOIN produits 
            ON commandes.product_id = produits.id
        JOIN option_commandees
            ON commandes.id = option_commandees.order_id
        WHERE id = $1
    `, [parseInt(req.params.id)], (error, result) => {
    if (error) {
        return next(error);
    }
    res.status(200).json(result.rows);
    })
})

//update
router.put('/:id', (req, res, next) => {
    const { user_id, product_id, paye, date } = req.body;
    pool.query(`
        UPDATE commandes SET 
        user_id = $1, 
        product_id = $2, 
        paye = $3, 
        date = $4 
        WHERE id = $5
    `, [user_id, product_id, paye, date, parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error update', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//delete
router.delete('/:id', (req, res, next) => {
    pool.query(`DELETE FROM commandes WHERE id = $1`, [parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error delete', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

module.exports = router;