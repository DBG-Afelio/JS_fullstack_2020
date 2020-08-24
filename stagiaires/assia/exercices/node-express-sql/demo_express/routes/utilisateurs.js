const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

//create 
router.post('', (req, res, next) => {
    const { login, password, nom, prenom, credit, formation, banni, admin } = req.body;
    pool.query('INSERT INTO utilisateurs (login, password, nom, prenom, credit, formation, banni, admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [login, password, nom, prenom, credit, formation, banni, admin], (error, result) => {
        if (error) {
            console.log('error create', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//retrieve all 
router.get('', (request, response, next) => {
    pool.query('SELECT * FROM utilisateurs', (error, result) => {
        if (error) {
            return next(error);
        }
        response.status(200).json(result.rows);
    });
});

//retrieve 1 
router.get('/:id', (req, res, next) => {
    pool.query(`SELECT * FROM utilisateurs WHERE id = $1`, [parseInt(req.params.id)], (error, result) => {
        if (error) {
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//update 
router.put('/:id', (req, res, next) => {
    const { login, password, nom, prenom, credit, formation, banni, admin } = req.body;
    pool.query('UPDATE utilisateurs SET \
        login = $1, \
        password = $2, \
        nom = $3, \
        prenom = $4, \
        credit = $5, \
        formation = $6, \
        banni = $7, \
        admin = $8 \
    WHERE id = $9', [login, password, nom, prenom, credit, formation, banni, admin, parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error update', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

//delete 
router.delete('/:id', (req, res, next) => {
    pool.query('DELETE FROM utilisateurs WHERE id = $1', [parseInt(req.params.id)], (error, result) => {
        if (error) {
            console.log('error delete', error);
            return next(error);
        }
        res.status(200).json(result.rows);
    });
});

module.exports = router;