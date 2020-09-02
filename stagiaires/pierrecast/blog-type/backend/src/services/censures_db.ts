import { pool } from "../db/pool";
import { response }  from "express";
import { getCodeError }  from "./error_handlers";

export async function getListCensures() {
    const value = await pool.query(`SELECT * FROM censures`)
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getForbiddenCensures() {
    const value = await pool.query(`SELECT * FROM censures WHERE interdit = true`)
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getCensureById(id: number) {
    const value = await pool.query(`SELECT * FROM censures WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function createCensure(body: any) {
    const { mot, interdit  } = body;
    const value = await pool.query(`
        INSERT INTO censures (mot, interdit) VALUES ($1, $2)
        `,[mot, interdit] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Censure crée !';
}

export async function updateCensure(id: number, body: any) {
    const { mot, interdit  } = body;
    const value = await pool.query(`
        UPDATE censures SET
        mot = $1,
        interdit = $2,

    WHERE id = $3`,
[mot, interdit, id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Censure modifié !';
}

export async function deleteCensure(id: number) {
    const value = await pool.query(`
    DELETE FROM censures WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Censure supprimé !';
}

export async function mask(results: any[]) {
    const censures = await getListCensures();

    results.forEach(result => {
        const commentaire = result.commentaire;

        censures.forEach(censure => {
            const mot = censure.mot;
            const motARemplacer = mot.replace(/[-/\^$*+?.()|[]{}]/g, '\\$&');
            const motARemplacerRegexp = new RegExp(motARemplacer, `gi`);


            if (motARemplacerRegexp.test(commentaire)) {
                let stars = '';
                for (const element of mot.length) {
                    stars+= "*";
                }
                console.log("taboo : ", result.commentaire, mot, stars);


                result.commentaire = result.commentaire.replace(motARemplacerRegexp, stars);
                console.log("Censure : ", result.commentaire);
            }
        });

        console.log(result.commentaire);
    })

    console.log(results)
    return results;
}

export async function checkComm(data: any) {
    const censures = await getForbiddenCensures();
    console.log('censures', censures);
    console.log('data', data);

    const commentaire = data.commentaire;
    let valid = true;
    censures.forEach(censure => {
        const mot = censure.mot;console.log(mot);
        const motARemplacer = mot.replace(/[-/\^$*+?.()|[]{}]/g, '\\$&');
        const motARemplacerRegexp = new RegExp(motARemplacer, `gi`);

        if (motARemplacerRegexp.test(commentaire)) {
            valid = false;
            console.log('Mot interdit', mot);
        }
    });

    return valid;
}
