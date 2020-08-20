const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

router.get('', (request, response, next) => {
    pool.query('SELECT * FROM fournisseurs', (error, result) => {
        response.json(result.rows);
    });
});

module.exports = router;