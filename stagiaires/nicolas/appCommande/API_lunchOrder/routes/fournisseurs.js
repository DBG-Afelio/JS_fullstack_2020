const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();


router.get('', (request, response, next) => {
    pool.query('SELECT * FROM fournisseurs', (error, result) => {
        response.json(result.rows);
    });
});
router.get('/:id', (request, response, next) => {
    pool.query('SELECT * FROM fournisseurs WHERE id = $1',[request.params.id], (error, result) => {
        response.json(result.rows[0]);
    });
});

router.post('', (request, response, next) => {

    const {nom, description,ferme, archive, horaire, tel}= request.body;

    pool.query('INSERT INTO fournisseurs(nom, description,ferme, archive, horaire, tel) VALUES($1,$2,$3,$4,$5,$6)',[nom, description,ferme, archive, horaire, tel], (error, result) => {
        if(error){
            return next(error);
        }
        response.json(result.rows);
    });
});
router.put('/:id', (request, response, next) => {

    const {nom, description,ferme, archive, horaire, tel}= request.body;

    pool.query('UPDATE fournisseurs SET id=$7, nom=$1, description=$2, ferme=$3, archive=$4, horaire=$5, tel=$6 WHERE id=$7 ',[nom, description,ferme, archive, horaire, tel, request.params.id], (error, result) => {
        if(error){
            return next(error);
        }
        response.json(result.rows);
    });
});

router.delete('/:id', (request, response, next) => {

    pool.query('DELETE FROM fournisseurs WHERE id = $1',[request.params.id], (error, result) => {
        response.json(result.rows);
    });
    
});

//router.post('/:id', (req, res) => {})

module.exports = router;