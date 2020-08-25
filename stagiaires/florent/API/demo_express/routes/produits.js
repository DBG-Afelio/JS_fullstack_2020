const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

router.get('', (request, response, next) => {
    pool.query('SELECT * FROM produits', (error, result) => {
        response.json(result.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM produits WHERE id = $1', [id], (error, result) => {
        response.json(result.rows);
    });
});

router.post('', (request, response) => {
    console.log(request.body);
    pool.query('INSERT INTO produits (nom, description, prix, fourn_id) VALUES ($1, $2, $3, $4)', 
    [request.body.nom,
     request.body.description,
     request.body.prix,
     request.body.fourn_id
    ], 
    (request,response)=>{
        response.status(200).json({message:'Requête créé!'});
    })
    
});

router.delete('',(request,response)=>{
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM commandes WHERE product_id=$1',[id], (erreur,result) => {
        pool.query('DELETE FROM produits WHERE id=$1',[id],(erreur,result) =>{
            response.json(result.rows);
        })
    })
});

module.exports = router;