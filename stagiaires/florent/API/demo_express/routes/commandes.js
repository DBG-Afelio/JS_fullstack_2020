const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

router.get('', (request, response, next) => {
    pool.query('SELECT * FROM commandes', (error, result) => {
        response.json(result.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM commades WHERE id = $1', [id], (error, result) => {
        response.json(result.rows);
    });
});

module.exports = router;