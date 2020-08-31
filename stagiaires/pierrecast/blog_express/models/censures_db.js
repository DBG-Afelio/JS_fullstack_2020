const pool = require("../db/pool");
const { response } = require("express");

async function getListCensures() {
    const value = await pool.query(`SELECT * FROM censures`)
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function getForbiddenCensures() {
    const value = await pool.query(`SELECT * FROM censures WHERE interdit = true`)
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function getCensureById(id) {
    const value = await pool.query(`SELECT * FROM censures WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return value.rows;
}

async function createCensure(body) {
    const { mot, interdit  } = body;
    const value = await pool.query(`
        INSERT INTO censures (mot, interdit) VALUES ($1, $2`,[nom, prenom, titre, article_id, censure, date_ajout] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'Censure crée !';
}

async function updateCensure(id, body) {
    const { mot, interdit  } = body;
    const value = await pool.query(`
        UPDATE censures SET 
        mot = $1, 
        interdit = $2, 
        
    WHERE id = $3`,
[mot, interdit, id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'Censure modifié !';
}

async function deleteCensure(id) {
    const value = await pool.query(`
    DELETE FROM censures WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error('Error');
    });
    return 'Censure supprimé !';
}

async function mask(results) {
    const censures = await getListCensures();
    
    results.forEach(result => {
        const commentaire = result.commentaire;

        censures.forEach(censure => {
            const mot = censure.mot;
            const mot_a_remplacer = mot.replace(/[-/\^$*+?.()|[]{}]/g, '\\$&');
            const mot_a_remplacer_regexp = new RegExp(mot_a_remplacer, `gi`);

            
            if (mot_a_remplacer_regexp.test(commentaire)) {
                let stars = '';
                for (let i=0; i<mot.length; i++) {
                    stars+= "*";
                }
                console.log("taboo : ", result.commentaire, mot, stars);
                

                result.commentaire = result.commentaire.replace(mot_a_remplacer_regexp, stars);
                console.log("Censure : ", result.commentaire);
            }
        });

        console.log(result.commentaire);
    })

    console.log(results)
    return results;
}

async function checkComm(data) {
    const censures = await getForbiddenCensures();
    console.log('censures', censures);
    console.log('data', data);
    
    const commentaire = data;
    let valid = true;
    censures.forEach(censure => {
        const mot = censure.mot;console.log(mot);
        const mot_a_remplacer = mot.replace(/[-/\^$*+?.()|[]{}]/g, '\\$&');
        const mot_a_remplacer_regexp = new RegExp(mot_a_remplacer, `gi`);
        
        if (mot_a_remplacer_regexp.test(commentaire)) {
            valid = false;
            console.log('Mot interdit', mot);
        }
    });

    return valid;
}

module.exports = {
    getListCensures,
    getForbiddenCensures,
    getCensureById, 
    createCensure, 
    updateCensure, 
    deleteCensure, 
    mask, 
    checkComm
};
