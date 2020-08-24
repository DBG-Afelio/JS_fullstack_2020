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

router.post('', (request, response) => {
    console.log(request.body);
    pool.query('INSERT INTO utilisateurs (login, password, nom, prenom, credit, formation, banni, admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
    [request.body.login,
     request.body.password,
     request.body.nom,
     request.body.prenom,
     request.body.credit,
     request.body.formation,
     request.body.banni,
     request.body.admin
    ], 
    (responses,result)=>{
        response.status(200).json({message:'Requête créé!'});
    })
});

router.put('/:id', (request,response)=>{
    const id = parseInt(request.params.id)
    pool.query('UPDATE utilisateurs SET  Login = $1, password = $2, nom = $3, prenom = $4, credit = $5, formation = $6, banni = $7, admin = $8 WHERE id = $9', 
    [request.body.login,
     request.body.password,
     request.body.nom,
     request.body.prenom,
     request.body.credit,
     request.body.formation,
     request.body.banni,
     request.body.admin,
    id
    ], 
    (erreur,result)=>{
        response.status(200).json({message:'Requête créé!'});
    }) 
});

router.delete('',(request,response)=>{
    pool.query('DELETE FROM utilisateurs', (error,result) => {
        response.json(result.rows);
    })
});

module.exports = router;