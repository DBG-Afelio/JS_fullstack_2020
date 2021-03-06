import { pool } from '../db/pool';

export class AuteursService {

    async getAllAuteurs() {
        const returnValue = await pool.query(`SELECT * FROM auteurs`)
            .catch(error => {
                console.log('Erreur dans la foncion getAllAuteurs()', error.stack);
                console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
                throw new Error('500');
            });
        return returnValue.rows;
    }

    async getAuteurById(id:number) {
        const returnValue = await pool.query(`SELECT * FROM auteurs WHERE id = $1`, [id])
            .catch(error => {
                console.log('Erreur dans la foncion getAuteurById()', error.stack);
                console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
                throw new Error('500');
            });
        return returnValue.rows[0];
    }

    async addAuteur(auteurData:any) {
        const { minibio, email, nom, prenom } = auteurData.body;
        await pool.query(`INSERT INTO auteurs (
            minibio,
            email,
            nom,
            prenom
            ) VALUES ($1, $2, $3, $4)`,
            [minibio, email, nom, prenom])
            .catch(error => {
                console.log('Erreur dans la foncion addAuteur()', error.stack);
                console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
                if (error.code.startsWith('22')) {
                    throw new Error('FORMAT_INVALIDE');
                } else {
                    throw new Error('INDEFINI');
                }
            });

        const { rows } = await pool.query(`SELECT * FROM auteurs ORDER BY id DESC LIMIT 1`);
        return rows.length > 0 ? rows[0] : {};
    }

    async updateAuteur(auteurData:any) {
        const { minibio, email, nom, prenom } = auteurData.body;
        const id = parseInt(auteurData.params.id, 10);
        await pool.query(`UPDATE auteurs SET
            minibio = $1,
            email = $2,
            nom = $3,
            prenom = $4
            WHERE id = $5`,
            [minibio, email, nom, prenom, id])
            .catch(error => {
                console.log('Erreur dans la foncion updateAuteur()', error.stack);
                console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
                if (error.code.startsWith('22')) {
                    throw new Error('FORMAT_INVALIDE');
                } else {
                    throw new Error('INDEFINI');
                }
            });

        const update = await this.getAuteurById(id)
            .catch(error => {
                console.log('Erreur dans la recup du auteur updated : foncion updateAuteur() > getAuteurById()', error.stack);
                console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
                throw new Error('500');
            });
        return update;
    }

    async deleteAuteurById(id:number) {
        await pool.query(`
        DELETE FROM auteurs WHERE id = $1`, [id] )
        .catch(error => {
            console.log('Erreur in deleteAuteurById() : ', error);
            throw new Error(error);
        });
        return {};
    }
}