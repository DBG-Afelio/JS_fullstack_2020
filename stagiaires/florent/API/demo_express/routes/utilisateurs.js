const { Router, response, request } = require('express');
const pool = require('../db/pool');
const router = Router();

router.get('', (request, response, next) => {
    pool.query('SELECT * FROM utilisateurs', (error, result) => {
        response.json(result.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM utilisateurs WHERE id = $1', [id], (error, result) => {
        response.json(result.rows);
    })
})

router.post('/:id', (request, response) => {
    pool.query('INSERT INTO utilisateurs (login, password, nom, prenom, credit, formation, banni, admin, id) VALUES (Frip, Fr@p, Frapi, Galo, 12, FULL_STACK, false, false, 2) '(request,response))
    response.status(200).json(pool);
});

module.exports = router;