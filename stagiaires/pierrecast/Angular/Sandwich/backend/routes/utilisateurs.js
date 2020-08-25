const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`SELECT * FROM utilisateurs WHERE id = $1`, [id] , (error, result) => {
        response.status(200).json(result.rows[0]);
    });
});

router.get('', (request, response, next) => {
    pool.query('SELECT * FROM utilisateurs', (error, result) => {
        response.status(200).json(result.rows);
    });
});

router.post('', (request, response) => {
    const {  login, password, nom , prenom, credit, formation, banni, admin } = request.body;
    pool.query(`INSERT INTO utilisateurs (
        login, password, nom, prenom, credit, formation, banni, admin
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [login, password, nom , prenom, credit, formation, banni, admin]

    , (error, result) => {console.log(error);
        response.status(200).json(result.rows);
    });
});

router.put('/:id', (request, response) => {
    const { login, password, nom , prenom, credit, formation, banni, admin } = request.body;
    const id = parseInt(request.params.id);
    pool.query(`UPDATE utilisateurs SET 
        login = $1, 
        password = $2, 
        nom = $3, 
        prenom = $4,
        credit = $5, 
        formation = $6,
        banni = $7, 
        admin = $8  WHERE id = $9`,
        [ login, password, nom , prenom, credit, formation, banni, admin,           id]

    , (error, result) => {
        response.status(200).json(result.rows);
    });
});

router.delete('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`DELETE FROM utilisateurs WHERE id = $1`, [id],  (error, result) => {
        response.status(200).json(result.rows);
    });
});

module.exports = router;
