import { pool } from "../db/pool";
import { response }  from "express";
import { getCodeError }  from "./error_handlers";

export async function getListAuteurs() {
    const value = await pool.query(`SELECT * FROM auteurs`)
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getAuteurById(id: number) {
    const value = await pool.query(`SELECT * FROM auteurs WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function createAuteur(body: any) {
    const { nom, prenom, email, presentation  } = body;
    const value = await pool.query(`
        INSERT INTO auteurs (nom, prenom, email, presentation) VALUES ($1, $2, $3, $4, $5)`,[nom, prenom, email, presentation] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Auteur crée !';
}

export async function updateAuteur(id: number, body: any) {
    const { nom, prenom, email, presentation  } = body;
    const value = await pool.query(`
        UPDATE auteurs SET
        nom = $1,
        prenom = $2,
        presentation = $3,
        date  = $4
    WHERE id = $5`,
[nom, prenom, email, presentation, id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Auteur modifié !';
}

export async function deleteAuteur(id: number) {

    const value = await pool.query(`
    DELETE FROM auteurs WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Auteur supprimé !';
}
