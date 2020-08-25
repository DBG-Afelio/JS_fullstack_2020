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

router.post('', (request, response) => {
    console.log(request.body);
    pool.query('INSERT INTO commandes (user_id, product_id, paye, date) VALUES ($1, $2, $3, $4)', 
    [request.body.user_id,
     request.body.product_id,
     request.body.paye,
     request.body.date
    ], 
    (request,response)=>{
        response.status(200).json({message:'Requête créé!'});
    })
});

router.put('/:id', (request,response)=>{
    const id = parseInt(request.params.id)
    pool.query('UPDATE commandes SET  user_id = $1, product_id = $2, paye = $3, date = $4 WHERE id = $5', 
    [request.body.user_id,
     request.body.product_id,
     request.body.paye,
     request.body.date,
    id
    ], 
    (erreur,result)=>{
        response.status(200).json({message:'Requête créé!'});
    }) 
});

router.delete('',(request,response)=>{
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM commandes WHERE id=$1',[id], (erreur,result) => {
        response.json(result.rows);
    })
});

module.exports = router;