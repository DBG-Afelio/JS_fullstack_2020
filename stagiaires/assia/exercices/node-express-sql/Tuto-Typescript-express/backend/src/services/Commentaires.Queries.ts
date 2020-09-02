import { pool } from '../db/pool';
import { getAllCensures, getCensureById, addCensure, updateCensure, getOnlyForbidden, getOnlyWordsToHide } from '../services/Censures.Queries';

// GET /commentaires

export async function getAllCommentaires() {
    const returnValue = await pool.query(`SELECT * FROM commentaires`)
        .catch(error => {
            console.log('Erreur dans la foncion getAllCommentaires()', error.stack);
            console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    return returnValue.rows;
}

// GET /commentaires/1

export async function getCommentaireById(id:number) {
    const returnValue = await pool.query(`SELECT * FROM commentaires WHERE id = $1`, [id])
        .catch(error => {
            console.log('Erreur dans la foncion getCommentaireById()', error.stack);
            console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new Error('500');
        });
    return returnValue.rows[0];
}

// POST /commentaires

export async function addCommentaire(commentaireData:any) {
    const { titre, contenu, articles_id, nom, prenom, date } = commentaireData.body;
    const check = await isAnyWordForbidden(contenu);

    if (!check.isAnyForbidden) {
        await pool.query(`INSERT INTO commentaires (
            titre,
            contenu,
            articles_id,
            nom,
            prenom,
            date
            ) VALUES ($1, $2, $3, $4, $5, $6)`,
            [titre, check.commentOut, articles_id, nom, prenom, date])
            .catch(error => {
                console.log('Erreur dans la foncion addCommentaire()', error.stack);
                console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
                if (error.code.startsWith('22')) {
                    throw new Error('FORMAT_INVALIDE');
                } else {
                    throw new Error('INDEFINI');
                }
            });

        const { rows } = await pool.query(`SELECT * FROM commentaires ORDER BY id DESC LIMIT 1`);
        return rows.length > 0 ? rows[0] : {};
    } else {
        console.log("500: il y a un mot interdit dans le commentaire");
        throw new Error('MOT_INTERDIT');
    }

}

// PUT /commentaire/1

export async function updateCommentaire(commentaireData:any) {

    const { titre, contenu, articles_id, nom, prenom, date } = commentaireData.body;
    const id = parseInt(commentaireData.params.id, 10);
    await pool.query(`UPDATE commentaires SET
        titre = $1,
        contenu = $2,
        articles_id = $3,
        nom = $4,
        prenom = $5,
        date = $6
        WHERE id = $7`,
        [titre, contenu, articles_id, nom, prenom, date, id])
        .catch(error => {
            console.log('Erreur dans la foncion updateCommentaire()', error.stack);
            console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            if (error.code.startsWith('22')) {
                throw new Error('FORMAT_INVALIDE');
            } else {
                throw new Error('INDEFINI');
            }
        });

    const update = await getCommentaireById(id)
        .catch(error => {
            console.log('Erreur dans la recup du commentaire updated : foncion updateCommentaire() > getCommentaireById()', error.stack);
            console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            throw new error('500');
        });

    return update;
}

// DELETE /commentaires/1
export async function deleteCommentaireById(id:number) {
    await pool.query(`
    DELETE FROM commentaires WHERE id = $1`, [id] )
    .catch(error => {
        console.log('Erreur in deleteCommentaireById() : ', error);
        throw new Error(error);
    });
    return {};
}

// Check if any censured word
export async function isAnyWordForbidden(commentIn:string) {
   // console.log('commentIN :', commentIn);

    const retour = { isAnyForbidden: false, commentOut: commentIn };
    const forbiddenList = await getOnlyForbidden().catch(error => { throw new Error(error) });

  //  console.log('forbiddenList = ', forbiddenList);
  // console.log(`mot interdit db: ${forbiddenObj.mot} =?= mot commentaire : ${commentWord}`);
    if (forbiddenList.length) {
        retour.isAnyForbidden = commentIn.split(' ').some(commentWord => {
            forbiddenList.forEach((forbiddenObj) => forbiddenObj.mot === commentWord)
        });
        console.log('is any Forbidden word in comment ? : ', retour.isAnyForbidden);
    }
    const hiddenList = await getOnlyWordsToHide().catch(error => { throw new Error(error) });
    if (!retour.isAnyForbidden && hiddenList) {
        retour.commentOut = '';
        commentIn.split(' ').forEach(commentWord => {
            hiddenList.forEach(wordToHideObj => {
                if (commentWord === wordToHideObj.mot) {
                    retour.commentOut += ` *****`;
                } else {
                    retour.commentOut += ` ${commentWord}`;
                }
            });
        });
    }
    console.log('retour obj :', retour.isAnyForbidden, retour.commentOut);
    return retour;
}
