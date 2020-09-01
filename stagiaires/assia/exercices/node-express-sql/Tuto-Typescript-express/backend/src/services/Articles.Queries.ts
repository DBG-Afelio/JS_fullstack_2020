import { pool } from '../db/pool';
 
/**
 * GET /articles
 * */ 
export async function getAllArticles() {
    const returnValue = await pool.query(`SELECT * FROM articles`)
        .catch(error => {
            console.log('Erreur dans la foncion getAllArticles()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    return returnValue.rows;
}

/**
 * GET /articles/1
 * */ 
export async function getArticleById(id: number) {
    const returnValue = await pool.query(`SELECT * FROM articles WHERE id = $1`, [id])
        .catch(error => {
            console.log('Erreur dans la foncion getArticleById()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    return returnValue.rows[0];
}

/**
 * POST /articles
 * */
export async function addArticle(articleData : any) {
    //create new article in db
    const { titre, contenu, auteurs_id, date, publie } = articleData.body;
    await pool.query(`INSERT INTO articles (
        titre,
        contenu,
        auteurs_id,
        date,
        publie
        ) VALUES ($1, $2, $3, $4, $5)`,
        [titre, contenu, auteurs_id, date, publie])
        .catch(error => {
            console.log('Erreur dans la foncion addArticle()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    // retrieve that created article
    const { rows } = await pool.query(`SELECT * FROM articles ORDER BY id DESC LIMIT 1`);
    return rows.length > 0 ? rows[0] : {};  
}

/**
 * PUT /articles/1
 * */
export async function updateArticle(articleData : any) {
    
    const { titre, contenu, auteurs_id, date, publie } = articleData.body;
    const id = parseInt(articleData.params.id);
    console.log('id du produit a modified : ', id);

    //update article
    await pool.query(`UPDATE articles SET
        titre = $1,
        contenu = $2,
        auteurs_id = $3,
        date = $4,
        publie = $5
        WHERE id = $6`,
        [titre, contenu, auteurs_id, date, publie, id])
        .catch(error => {
            console.log('Erreur dans la foncion updateArticle()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            if (error.code === '23503') {
                throw new Error('404');
            } else {
                throw new Error('500');
            }
        });
    // retrieve that updated article
    const valRecue = await getArticleById(id)
        .catch(error => {
            console.log('Erreur dans la recup de l\'article updated : foncion updateArticle() > getArticleById()', error.stack);
            console.log('ERROR code :', error.code); //code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    return valRecue; 
}

// DELETE /articles/1

