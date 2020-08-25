const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();


//getSupplierById
router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`SELECT * FROM fournisseurs WHERE id = $1`, [id] , (error, result) => {
        response.status(200).json(result.rows[0]);
    });
});

//getList
router.get('', (request, response) => {
    pool.query('SELECT * FROM fournisseurs', (error, result) => {
        response.status(200).json(result.rows);
    });
});

//createSupplier
router.post('', (request, response) => {
    const {  nom, description, ferme , archive, horaire, tel } = request.body;
    pool.query(`INSERT INTO fournisseurs (
        nom, description, ferme , archive, horaire, tel
    ) VALUES ($1, $2, $3, $4, $5, $6)`,
        [ nom, description, ferme , archive, horaire, tel]

    , (error, result) => {
        console.log(error);
        response.status(200).json(result.rows);
    });
});

//updateSupplier
router.put('/:id', (request, response) => {
    const {  nom, description, ferme , archive, horaire, tel } = request.body;
    const id = parseInt(request.params.id);
    pool.query(`UPDATE fournisseurs SET 
            nom = $1, 
            description = $2, 
            ferme = $3, 
            archive = $4,
            horaire = $5, 
            tel = $6  
        WHERE id = $7`,
        [   nom, description, ferme , archive, horaire, tel,    id]

    , (error, result) => {
        response.status(200).json(result.rows);
    });
});

//removeSupplier
router.delete('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`DELETE FROM fournisseurs WHERE id = $1`, [id],  (error, result) => {
        response.status(200).json(result.rows);
    });
});

// getSupplierWithProductsById

// getProductAndSupplier

module.exports = router;