const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();

const allMerged = `SELECT p.id,p.nom nom,p.description description,op.id option_id,o.nom nom_option,op.surcout surcout_option,f.nom nom_fournisseur,p.fourn_id,p.prix \
                     FROM produits p \
                        INNER JOIN fournisseurs f ON p.fourn_id = f.id \
                        LEFT JOIN options_produit op ON op.produit_id = p.id \
                        LEFT JOIN options o ON op.option_id = o.id`;

    
const mergedPlusId = allMerged + ' WHERE p.id = $1';

function mergeProductsWithOptions(productList){

    let modifiedData = [];

    productList.forEach(object => {

            let newObject = {

                id : object.id,
                nom : object.nom,
                description : object.description,
                options : [],
                nom_fournisseur : object.nom_fournisseur,
                fourn_id : object.fourn_id,
                prix : object.prix

            };

            if(modifiedData.some(element => element.nom === object.nom) ){

                const newOption = {

                    id:object.option_id,
                    nom:object.nom_option,
                    surcout : object.surcout_option

                }
                
                modifiedData.find(previousObject => previousObject.nom === object.nom).options.push(newOption)

            }else{

                newObject.options.push(

                    {
                        id:object.option_id,
                        nom:object.nom_option,
                        surcout : object.surcout_option
                    }

                )
                modifiedData.push(newObject);

            }     

        })

    return modifiedData

}

router.get('', (request, response, next) => {

    if(request.query.fourn_id){
   
        pool.query(allMerged + ' WHERE f.id = $1',[request.query.fourn_id], (error, result) => {
            
            response.json(mergeProductsWithOptions(result.rows))
            

        });

    }else{
        
        pool.query(allMerged , (error, result) => {
            
            response.json(mergeProductsWithOptions(result.rows))
        
        });

    }
    
});

router.get('/:id', (request, response, next) => {

    pool.query(mergedPlusId,[request.params.id], (error, result) => {

        response.json(mergeProductsWithOptions(result.rows)[0]); 

    });
    
});

router.post('', (request, response) => {

    const {options, nom,description,prix,fourn_id} = request.body; 
    pool.query('INSERT INTO produits (nom,description,prix,fourn_id) VALUES($1,$2,$3,$4)',[nom,description,prix,fourn_id], (error, result) => {
        let idProduct;
        pool.query('SELECT MAX(id) FROM produits',(error, result) => {
            idProduct=result.rows[0].max;
        })
        if(options.length>0){

            options.forEach(option=>{

                pool.query('SELECT * FROM options', (error,result)=>{

                    let idOption;

                    if (!result.rows.some(element => element.nom === option.nom)){

                        pool.query('INSERT INTO options(nom) VALUES($1)',[option.nom],(error,result)=>{
                            idOption=result.rows.id;
                            

                        })

                    }else{

                         idOption=result.rows.find(element=>element.nom=option.nom).id;

                    }
                    pool.query('INSERT INTO options_produit (option_id, produit_id, surcout) VALUES($1,$2,$3)',[idOption, idProduct, option.surcout], (error,result) => {

                        

                    })

                })
                
            })
            
        }
        
        response.json(result.rows);
        
    });

});

router.delete('/:id', (request, response, next) => {

    pool.query('DELETE FROM produits WHERE id = $1',[request.params.id], (error, result) => {
        response.json(result.rows);
    });
    
});

router.put('/:id', (request, response) => {

    const {nom,description,prix,fourn_id} = request.body;


    pool.query('UPDATE produits SET nom = $2,description = $3,prix = $4,fourn_id = $5 WHERE id = $1',[request.params.id,nom,description,prix,fourn_id], (error, result) => {

        response.json(result.rows);
        
    });

});

module.exports = router;