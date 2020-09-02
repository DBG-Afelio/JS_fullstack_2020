import { pool } from '../db/pool';
import { CensuresService } from '../services/Censures.Queries';
const censuresService = new CensuresService();
export class CommentairesService {

    async getAllCommentaires() {
        const returnValue = await pool.query(`SELECT * FROM commentaires`)
            .catch(error => {
                console.log('Erreur dans la foncion getAllCommentaires()', error.stack);
                console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
                throw new Error('500');
            });
        return returnValue.rows;
    }

    async getCommentaireById(id: number) {
        const returnValue = await pool.query(`SELECT * FROM commentaires WHERE id = $1`, [id])
            .catch(error => {
                console.log('Erreur dans la foncion getCommentaireById()', error.stack);
                console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
                throw new Error('500');
            });
        return returnValue.rows[0];
    }

    async addCommentaire(commentaireData: any) {
        const { titre, contenu, articles_id, nom, prenom, date } = commentaireData.body;
        const check = await this.isAnyWordForbidden(contenu);

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

    async updateCommentaire(commentaireData: any) {

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

        const update = await this.getCommentaireById(id)
            .catch(error => {
                console.log('Erreur dans la recup du commentaire updated : foncion updateCommentaire() > getCommentaireById()', error.stack);
                console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
                throw new error('500');
            });

        return update;
    }

    // DELETE /commentaires/1
    async deleteCommentaireById(id: number) {
        await pool.query(`
        DELETE FROM commentaires WHERE id = $1`, [id])
            .catch(error => {
                console.log('Erreur in deleteCommentaireById() : ', error);
                throw new Error(error);
            });
        return {};
    }

    // Check if any censured word
    async isAnyWordForbidden(commentIn: string) {
        // console.log('commentIN :', commentIn);
        const commentInArr = commentIn.split(' ');
        const retour = { isAnyForbidden: false, commentOut: commentIn };
        const forbiddenListObj = await censuresService.getOnlyForbidden().catch(error => { throw new Error(error) });
        const forbiddenList = forbiddenListObj.map(el => el.mot);

        if (forbiddenList.length) {
            retour.isAnyForbidden = commentInArr.some(commentWord => forbiddenList.includes(commentWord));
            console.log('is any Forbidden word in comment ? : ', retour.isAnyForbidden);
        }

        const hiddenListObj = await censuresService.getOnlyWordsToHide().catch(error => { throw new Error(error) });
        const hiddenList = hiddenListObj.map(obj => obj.mot);
        // console.log('hiddenList : ', hiddenList);

        if (!retour.isAnyForbidden && hiddenList) {
            retour.commentOut = '';
            commentInArr.forEach(commentWord => {
                if (hiddenList.includes(commentWord)) {
                    let hidden = '';
                    for (const letter of commentWord) {
                        hidden += '*'
                    }
                    retour.commentOut += ` ${hidden}`;
                } else {
                    retour.commentOut += ` ${commentWord}`;
                }
            });
        }

        console.log('retour fonction :', retour.isAnyForbidden, retour.commentOut);
        return retour;
    }
}
