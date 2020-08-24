const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

//create
router.post('', (req, res, next) => {
    const { nom, description, prix, fourn_id } = req.body;
    pool.query('INSERT INTO produits (nom, description, prix,fourn_id) VALUES ($1, $2, $3, $4)', [nom, description, prix, fourn_id], (error, result) => {
        if (error) {
            console.log('error create', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//retrieve all
router.get('', (request, response, next) => {
    pool.query('SELECT * FROM produits', (error, result) => {
        if (error) {
            return next(error);
        }
        response.status(200).json(result.rows);
    });
});

//retrieve 1
router.get('/:id', (req, res, next) => {
    pool.query(`SELECT * FROM produits WHERE id = $1`, [parseInt(req.params.id)], (error, result) => {
        if (error) {
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//update
router.put('/:id', (req, res, next) => {
    const { nom, description, prix, fourn_id } = req.body;
    pool.query(`\
        UPDATE produits SET 
            nom = $1, 
            description = $2, 
            prix = $3, 
            fourn_id = $4 
        WHERE id = $5
        `, [nom, description, prix, fourn_id, parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error update', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//delete
router.delete('/:id', (req, res, next) => {
    pool.query('DELETE FROM produits WHERE id = $1', [parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error delete', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//Produit + options dispo
router.get('/:id', (req, res, next) => {
    pool.query(`\
    SELECT * 
    FROM produits 
    WHERE id = $1 
    JOIN options
        ON produits.id = options.product_id
    ORDER BY 
    `, [parseInt(req.params.id)], (error, result) => {
        if (error) {
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});


module.exports = router;