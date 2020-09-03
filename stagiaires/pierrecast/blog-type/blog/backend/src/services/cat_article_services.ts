import { pool } from "../db/pool";
import { getCodeError }  from "./error_handlers";
import { CatArticle } from "../models/cat_articles_models";

export class CatArticleService {
    async getListCategoriesArticles(): Promise<CatArticle[]> {
        const catArticlesRows = await pool.query(`SELECT * FROM categories_articles`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        const catArticles: CatArticle[] = catArticlesRows.rows.map(
            (row: any) => new CatArticle(
                row.id,
                row.libelle,
                row.description
            )
        );
        return catArticles;
    }

    async getCategoriesArticlesById(id: number): Promise<CatArticle> {
        const catArticlesRows = await pool.query(`SELECT * FROM categories_articles WHERE id = $1`, [id])
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        const catArticle = new CatArticle(
            catArticlesRows.rows[0].id,
            catArticlesRows.rows[0].libelle,
            catArticlesRows.rows[0].description

        );
        return catArticle;
    }

    async createCategoriesArticles(categories:any[], articleId: number): Promise<string> {
        categories.forEach(async categorieId => {
            const value = await pool.query(`
                INSERT INTO categories_articles (article_id, categorie_id) VALUES ($1, $2)`,[articleId, categorieId] )
            .catch((error: Error) => {
                console.log(error);
                throw new Error(getCodeError(error));
            });

        });

        return 'Catégories inserées dans l\'article !';
    }

    async deleteCategoriesArticles(id: number): Promise<string> {
        const value = await pool.query(`
        DELETE FROM categories_articles WHERE id = $1`, [id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'CategoriesArticles supprimé !';
    }

    async deleteAllCategoriesFromArticle(id: number): Promise<string> {
        const value = await pool.query(`
        DELETE FROM categories_articles WHERE article_id = $1`, [id] )
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'CategoriesArticles toutes supprimées';
    }
}