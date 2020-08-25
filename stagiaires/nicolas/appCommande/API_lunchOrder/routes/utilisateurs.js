const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

router.get('', (request, response, next) => {
    pool.query('SELECT * FROM utilisateurs', (error, result) => {
        response.json(result.rows);
    });
});

router.get('/:id', (request, response, next) => {

    pool.query('SELECT * FROM utilisateurs WHERE id = $1',[request.params.id], (error, result) => {
        response.json(result.rows[0]);
    });
    
});

router.post('', (request, response) => {

    const {login,password,nom,prenom,credit,formation,banni,admin} = request.body;


    pool.query('INSERT INTO utilisateurs (login,password,nom,prenom,credit,formation,banni,admin) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',[login,password,nom,prenom,credit,formation,banni,admin], (error, result) => {

        response.json(result.rows);
        
    });

});

router.delete('/:id', (request, response, next) => {

    pool.query('DELETE FROM utilisateurs WHERE id = $1',[request.params.id], (error, result) => {
        response.json(result.rows);
    });
    
});

router.put('/:id', (request, response) => {

    const {login,password,nom,prenom,credit,formation,banni,admin} = request.body;


    pool.query('UPDATE utilisateurs SET login = $2,password = $3,nom = $4,prenom = $5,credit = $6,formation = $7,banni = $8,admin = $9 WHERE id = $1',[request.params.id,login,password,nom,prenom,credit,formation,banni,admin], (error, result) => {

        response.json(result.rows);
        
    });

});


module.exports = router;