import { pool } from '../db/pool';
 
/**
 * GET /censures
 * */ 
export async function getAllCensures() {
    const returnValue = await pool.query(`SELECT * FROM censures`)
        .catch(error => {
            console.log('Erreur dans la foncion getAllCensures()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    
    return returnValue.rows;
}

export async function getOnlyForbidden() {
    const onlyForbidden = await pool.query(`SELECT * FROM censures WHERE toBlock = true`)
        .catch(error => {
            console.log('Erreur getOnlyForbidden()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    console.log('nombre de mots interdit a bloquer en entree: ', onlyForbidden.rows.length);
    return onlyForbidden.rows.length > 0 ? onlyForbidden.rows : [];
}

export async function getOnlyWordsToHide() {
    const onlyHidden = await pool.query(`SELECT * FROM censures WHERE toBlock = false`)
        .catch(error => {
            console.log('Erreur getOnlyForbidden()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    console.log('nombre de mots censures a cacher seulement : ', onlyHidden.rows.length);
    return onlyHidden.rows.length > 0 ? onlyHidden.rows : [];
}

/**
 * GET /censures/1
 * */ 
export async function getCensureById(id:number) {
    const returnValue = await pool.query(`SELECT * FROM censures WHERE id = $1`, [id])
        .catch(error => {
            console.log('Erreur dans la foncion getCensureById()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    return returnValue.rows[0];
}

/**
 * POST /censures
 * */
export async function addCensure(censureData:any) {
    
    const { mot, toBlock } = censureData.body;
    await pool.query(`INSERT INTO censures (
        mot,
        toBlock
        ) VALUES ($1, $2)`,
        [mot, toBlock])
        .catch(error => {
            console.log('Erreur dans la foncion addCensure()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    
    const { rows } = await pool.query(`SELECT * FROM censures ORDER BY id DESC LIMIT 1`);
    return rows.length > 0 ? rows[0] : {};  
}

/**
 * PUT /commentaire/1
 * */
export async function updateCensure(censureData: any) {
    
    const { titre, contenu, articles_id, nom, prenom, date } = censureData.body;
    const id = parseInt(censureData.params.id);
    await pool.query(`UPDATE censures SET
        titre = $1,
        contenu = $2,
        articles_id = $3,
        nom = $4, 
        prenom = $5,
        date = $6
        WHERE id = $7`,
        [titre, contenu, articles_id, nom, prenom, date, id])
        .catch(error => {
            console.log('Erreur dans la foncion updateCensure()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            if (error.code === '23503') {
                throw new Error('404');
            } else {
                throw new Error('500');
            }
        });
    
    const update = await getCensureById(id)
        .catch(error => {
            console.log('Erreur dans la recup du commentaire updated : foncion updateCensure() > getCensureById()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new error('500');
        });
    
    return update;
}

// DELETE /censures/1


