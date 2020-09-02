import { pool } from "../db/pool";
import { response }  from "express";
import { getCodeError }  from "./error_handlers";
import { Auteur } from "../models/auteurs_models";

export class AuteurService {
    async getListAuteurs(): Promise<Auteur[]> {
        const auteursRows = await pool.query(`SELECT * FROM auteurs`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const auteurs: Auteur[] = auteursRows.rows.map(
            (row: any) => new Auteur(
                row.id,
                row.nom,
                row.prenom,
                row.email,
                row.presentation
            )
        );
        return auteurs;
    }

    async getAuteurById(id: number): Promise<Auteur> {
        const auteursRows = await pool.query(`SELECT * FROM auteurs WHERE id = $1`, [id])
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const auteur = new Auteur(
            auteursRows.rows[0].id,
            auteursRows.rows[0].nom,
            auteursRows.rows[0].prenom,
            auteursRows.rows[0].email,
            auteursRows.rows[0].presentation
        );
        return auteur;
    }

    async createAuteur(body: any): Promise<string> {
        const { nom, prenom, email, presentation } = body;
        const value = await pool.query(`
            INSERT INTO auteurs (nom, prenom, email, presentation)
            VALUES ($1, $2, $3, $4)`,[nom, prenom, email, presentation] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Auteur crée !';
    }

    async updateAuteur(id: number, body: any): Promise<string> {
        const { nom, prenom, email, presentation  } = body;
        const value = await pool.query(`
            UPDATE auteurs SET
            nom = $1,
            prenom = $2,
            email = $3,
            presentation  = $4
        WHERE id = $5`,
    [nom, prenom, email, presentation, id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Auteur modifié !';
    }

    async deleteAuteur(id: number): Promise<string> {

        const value = await pool.query(`
        DELETE FROM auteurs WHERE id = $1`, [id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Auteur supprimé !';
    }
}
