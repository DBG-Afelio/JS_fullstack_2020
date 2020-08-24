const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();


//getProductById
router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`
        SELECT  produits.nom as nom, description, prix, fourn_id, produits.id, 
                ARRAY_AGG(options.nom ) as nom_options, 
                ARRAY_AGG(options.surcout) as surcouts,  
                ARRAY_AGG(options.id) as ids
        FROM produits 
        LEFT JOIN options ON options.produit_id = produits.id 
        WHERE produits.id = $1 GROUP BY produits.id`, [id] , (error, result) => {
            if (error) { console.log(error)} ;
        response.status(200).json(transformProduct(result.rows));
    });
});

function transformProduct(result) {
    
    result.map(produit => { 
        
        if (produit.nom_options) {
            produit.options =  [];
            produit.nom_options.map((option, index) => {
                if (produit.nom_options[index]) {
                    let item = { 
                        "nom": produit.nom_options[index], 
                        "surcout": produit.surcouts[index],
                        "id": produit.ids[index] };
                    produit.options.push(item); 
                }
            });
            delete produit.surcouts;
            delete produit.nom_options;
            delete produit.ids;
        } 
    }) ;

    return result;
}

//getList
router.get('', (request, response) => {
    pool.query(`SELECT  produits.nom as nom , description, prix, fourn_id, produits.id, 
                    ARRAY_AGG(options.nom ) as nom_options, 
                    ARRAY_AGG(options.surcout) as surcouts, 
                    ARRAY_AGG(options.id) as ids
                FROM produits 
                LEFT JOIN options ON options.product_id = produits.id 
                GROUP BY produits.id ORDER BY produits.id`, (error, result) => { 
                    if (error) { console.log(error)} ;
        response.status(200).json(transformProduct(result.rows));
    });
});

//createProduct
router.post('', (request, response) => {
    const { nom, description, prix, fourn_id } = request.body;
    
    // insère le produit sans option
    pool.query(`INSERT INTO produits (nom, description, prix, fourn_id) 
    VALUES ($1, $2, $3, $4)`,
        [nom, description, prix, fourn_id], 
        (error, result) => {
        if (error) { console.log(error)} ;

         // récupère l'id du nouveau/dernier produit inséré
            pool.query(`SELECT MAX(id) FROM produits`,
            (error, result) => {
            if (error) { console.log(error)};
            const produit_id = result.rows[0].max;

            // insère chaque option avec le produit_id
            request.body.options.forEach(option => {
                const { nom, surcout } = option;
                pool.query(`INSERT INTO options (nom, surcout, produit_id) 
                VALUES ($1, $2, ${produit_id})`,
                    [nom, surcout], 
                    (error, result) => {
                    if (error) { console.log(error)} ;
                    
                });
            }) ;
            response.redirect(`produits/${produit_id}`);
        });
    });
});


//updateProduct
router.put('/:id', (request, response) => {
    console.log("debut");
    const { nom , description, prix, fourn_id } = request.body;
    const produit_id = parseInt(request.params.id);
    pool.query(`UPDATE produits SET 
            nom = $1, 
            description = $2, 
            prix = $3, 
            fourn_id  = $4
        WHERE id = $5`,
        [nom , description, prix, fourn_id, produit_id], (error, result) => {
            console.log("1 : ", error);
        pool.query(`DELETE FROM options WHERE produit_id = $1`, [produit_id],  (error, result) => {
            console.log("2 : ", error);
            request.body.options.forEach(option => {
                pool.query(`
                        INSERT INTO options (nom, surcout,  produit_id) 
                        VALUES ($1, $2, $3) `, 
                        [option.nom, option.surcout,  produit_id],  (error, result) => {
                            console.log("3 : ", error);
                            
                });
            });
            response.status(200).send("bien joué");
        });
    });
});

//removeProduct
router.delete('/:id', (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`DELETE FROM produits WHERE id = $1`, [id],  (error, result) => {
        response.status(200).json(result.rows);
    });
});

//getProductsFromSupplier

module.exports = router;