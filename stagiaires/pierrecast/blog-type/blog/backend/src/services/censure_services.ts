import { pool } from "../db/pool";
import { response }  from "express";
import { getCodeError }  from "./error_handlers";
import { Censure } from "../models/censures_models";
import { Commentaire } from "../models/commentaires_models";

export class CensureService {
    async getListCensures() : Promise<Censure[]> {
        const censuresRows = await pool.query(`SELECT * FROM censures`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const censures: Censure[] = censuresRows.rows.map(
            (row: any) => new Censure(
                row.id,
                row.mot,
                row.interdit
            )
        );
        return censures;
    }

    async getForbiddenCensures() : Promise<Censure[]> {
        const censuresRows = await pool.query(`SELECT * FROM censures WHERE interdit = true`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        const censures: Censure[] = censuresRows.rows.map(
            (row: any) => new Censure(
                row.id,
                row.mot,
                row.interdit
            )
        );
        return censures;
    }

    async getCensureById(id: number): Promise<Censure> {
        const censuresRows = await pool.query(`SELECT * FROM censures WHERE id = $1`, [id])
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        const commentaire = new Censure(
            censuresRows.rows[0].id,
            censuresRows.rows[0].mot,
            censuresRows.rows[0].interdit

        );
        return commentaire;
    }

    async createCensure(body: any): Promise<string> {
        const { mot, interdit  } = body;
        const value = await pool.query(`
            INSERT INTO censures (mot, interdit) VALUES ($1, $2)
            `,[mot, interdit] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Censure crée !';
    }

    async updateCensure(id: number, body: any): Promise<string> {
        const { mot, interdit  } = body;
        const value = await pool.query(`
            UPDATE censures SET
            mot = $1,
            interdit = $2,

        WHERE id = $3`,
    [mot, interdit, id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Censure modifié !';
    }

    async deleteCensure(id: number): Promise<string> {
        const value = await pool.query(`
        DELETE FROM censures WHERE id = $1`, [id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Censure supprimé !';
    }

    async mask(results: Commentaire[]): Promise<Commentaire[]> {
        const censures = await this.getListCensures();

        results.forEach(result => {
            const commentaire = result.commentaire;

            censures.forEach(censure => {
                const mot = censure.mot;
                const motARemplacer = mot.replace(/[-/\^$*+?.()|[]{}]/g, '\\$&');
                const motARemplacerRegexp = new RegExp(motARemplacer, `gi`);


                if (motARemplacerRegexp.test(commentaire)) {
                    let stars = '';
                    for (const element of mot) {
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

    async checkComm(data: any): Promise<boolean> {
        const censures = await this.getForbiddenCensures();
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
}