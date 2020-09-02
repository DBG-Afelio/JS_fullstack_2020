import { pool } from "../db/pool";
import { response }  from "express";
import { getCodeError }  from "./error_handlers";

export async function getListCategories() {
    const value = await pool.query(`SELECT * FROM categories`)
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function getCategorieById(id: number) {
    const value = await pool.query(`SELECT * FROM categories WHERE id = $1`, [id])
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return value.rows;
}

export async function createCategorie(body: any) {
    const { libelle, description  } = body;
    const value = await pool.query(`
        INSERT INTO categories (libelle, description) VALUES ($1, $2, $3, $4, $5, $6)`,[libelle, description] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Categorie crée !';
}

export async function updateCategorie(id: number, body: any) {
    const { libelle, description  } = body;
    const value = await pool.query(`
        UPDATE categories SET
        libelle = $1,
        description = $2
    WHERE id = $3`,
[libelle, description, id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Categorie modifié !';
}

export async function deleteCategorie(id: number) {
    const value = await pool.query(`
    DELETE FROM categories WHERE id = $1`, [id] )
    .catch(error => {
        console.log(error);
        throw new Error(getCodeError(error));
    });
    return 'Categorie supprimé !';
}
