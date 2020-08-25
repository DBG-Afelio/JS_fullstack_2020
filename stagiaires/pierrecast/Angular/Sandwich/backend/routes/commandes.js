const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();


//getCommandById
router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`
        SELECT * FROM commandes 
        INNER JOIN utilisateurs ON commandes.user_id = utilisateurs.id 
        INNER JOIN produits ON commandes.product_id = produits.id 
        WHERE id = $1`, [id] , (error, result) => {
        response.status(200).json(result.rows);
    });
});

//getList
router.get('', (request, response) => {
    pool.query(`SELECT * FROM commandes 
                    INNER JOIN utilisateurs ON commandes.user_id = utilisateurs.id 
                    INNER JOIN produits ON commandes.product_id = produits.id`, (error, result) => {
        response.status(200).json(result.rows);
    });
});

//createCommand
router.post('', (request, response) => {
    const { user_id, paye, date, produit_id } = request.body;
    pool.query(`INSERT INTO commandes (
         user_id, paye, date, produit_id 
    ) VALUES ($1, $2, $3, $4, $5, $6)`,
        [user_id, paye, date, produit_id ]

    , (error, result) => {
        response.status(200).json(result.rows);
    });
});


//updateCommand
router.put('/:id', (request, response) => {
    const { user_id, paye, date, produit_id } = request.body;
    const id = parseInt(request.params.id);
    pool.query(`UPDATE commandes SET 
            user_id = $1, 
            paye = $2, 
            date = $3, 
            produit_id  = $4
        WHERE id = $5`,
        [user_id, paye, date, produit_id,        id]

    , (error, result) => {
        response.status(200).json(result.rows);
    });
});

//removeCommand
router.delete('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`DELETE FROM commandes WHERE id = $1`, [id],  (error, result) => {
        response.status(200).json(result.rows);
    });
});

module.exports = router;