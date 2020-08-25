const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

const mergedData = `SELECT u.id user_id,p.id product_id, ARRAY( SELECT op.id ) option_ids  , c.id, u.nom nom_utilisateur, p.nom nom_produit, o.nom nom_option, c.paye, c.date, p.prix, op.surcout, p.prix + COALESCE(op.surcout, 0) total  \
                    FROM commandes c \
                        INNER JOIN utilisateurs u ON u.id = c.user_id \
                        INNER JOIN produits p ON p.id = c.product_id \
                        LEFT JOIN options_commandees oc ON oc.commande_id = c.id \
                        LEFT JOIN options_produit op ON op.id = oc.option_id \
                        LEFT JOIN options o ON o.id = op.option_id`;

router.get('', (request, response, next) => {
    pool.query(mergedData, (error, result) => {

        if(error){console.log(error)}

        response.json(result.rows);

    });
});

router.get('/:id', (request, response, next) => {
    pool.query(mergedData + ' WHERE c.id = $1',[request.params.id], (error, result) => {

        if(error){console.log(error)}

        response.json(result.rows);

    });
});

//router.post('/:id', (req, res) => {})

module.exports = router;