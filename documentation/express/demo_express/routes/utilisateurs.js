const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

router.get('', (request, response, next) => {
    pool.query('SELECT * FROM utilisateurs', (error, result) => {
        response.json(result.rows);
    });
});


//router.post('/:id', (req, res) => {})

module.exports = router;