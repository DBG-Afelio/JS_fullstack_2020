import { pool } from "../db/pool";
import { getCodeError }  from "./error_handlers";
import { Categorie } from "../models/categories_models";

export class CategorieService {
    async getListCategories(): Promise<Categorie[]> {
        const categoriesRows = await pool.query(`SELECT * FROM categories`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const categories: Categorie[] = categoriesRows.rows.map(
            (row: any) => new Categorie(
                row.id,
                row.libelle,
                row.description
            )
        );
        return categories;
    }

    async getCategorieById(id: number): Promise<Categorie> {
        const categoriesRows = await pool.query(`SELECT * FROM categories WHERE id = $1`, [id])
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        const categorie = new Categorie(
            categoriesRows.rows[0].id,
            categoriesRows.rows[0].libelle,
            categoriesRows.rows[0].description

        );
        return categorie;
    }

    async createCategorie(body: any): Promise<string> {
        const { libelle, description  } = body;
        const value = await pool.query(`
            INSERT INTO categories (libelle, description) VALUES ($1, $2, $3, $4, $5, $6)`,[libelle, description] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Categorie crée !';
    }

    async updateCategorie(id: number, body: any): Promise<string> {
        const { libelle, description } = body;
        const value = await pool.query(`
            UPDATE categories SET
            libelle = $1,
            description = $2
        WHERE id = $3`,
    [libelle, description, id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Categorie modifié !';
    }

    async deleteCategorie(id: number): Promise<string>{
        const value = await pool.query(`
        DELETE FROM categories WHERE id = $1`, [id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Categorie supprimé !';
    }
}
