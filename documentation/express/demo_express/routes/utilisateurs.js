const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

function getAllUtilisateur() {
    let users = [];
    await pool.query('SELECT * FROM utilisateurs', (error, result) => {
        //asynchrone
    });
    return users;

}

router.get('', (request, response, next) => {
        response.json(getAllUtilisateur());
});


//router.post('/:id', (req, res) => {})

module.exports = router;