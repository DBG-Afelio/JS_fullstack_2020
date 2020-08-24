const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

router.get('', (request, response, next) => {
    pool.query('SELECT * FROM fournisseurs', (error, result) => {
        response.json(result.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM fournisseurs WHERE id = $1', [id], (error, result) => {
        response.json(result.rows);
    })
})

router.post('', (request, response) => {
    console.log(request.body);
    pool.query('INSERT INTO fournisseurs (nom, description, ferme, archive, horaire, tel) VALUES ($1, $2, $3, $4, $5, $6)', 
    [request.body.nom,
     request.body.description,
     request.body.ferme,
     request.body.archive,
     request.body.horaire,
     request.body.tel
    ], 
    (erreur,result)=>{
        response.status(200).json({message:'Requête créé!'});
    })
    
});

router.put('/:id', (request,response)=>{
    const id = parseInt(request.params.id)
    pool.query('UPDATE fournisseurs SET nom = $1, description = $2, ferme = $3, archive = $4, horaire = $5, tel = $6 WHERE id = $7', 
    [request.body.nom,
     request.body.description,
     request.body.ferme,
     request.body.archive,
     request.body.horaire,
     request.body.tel,
     id
    ], 
    (erreur,result)=>{
        console.log(erreur);
        response.status(200).json({message:'Requête créé!'});
    }) 
});

router.delete('',(request,response)=>{
    pool.query('DELETE FROM utilisateurs', (error,result) => {
        response.json(result.rows);
    })
});

module.exports = router;