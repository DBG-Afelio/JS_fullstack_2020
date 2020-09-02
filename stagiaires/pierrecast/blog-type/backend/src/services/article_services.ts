import { pool } from "../db/pool";
import { response } from "express";
import { getCodeError }  from "./error_handlers";
import { Article } from "../models/articles_models";

export class ArticleService {
    async getListArticles(): Promise<Article[]> {
        const articlesRows = await pool.query(`SELECT * FROM articles`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const articles: Article[] = articlesRows.rows.map(
            (row: any) => new Article(
                row.id,
                row.titre,
                row.contenu,
                row.date,
                row.auteurId,
                row.publie
            )
        );
        return articles;
    }

    async getArticleById(id: number): Promise<Article> {
        const articlesRows = await pool.query(`SELECT * FROM articles WHERE id = $1`, [id])
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const article = new Article(
            articlesRows.rows[0].id,
            articlesRows.rows[0].titre,
            articlesRows.rows[0].contenu,
            articlesRows.rows[0].date,
            articlesRows.rows[0].auteurId,
            articlesRows.rows[0].publie

        );
        return article;
    }

    async getArticleByAuteur(id: number): Promise<Article[]> {
        const articlesRows = await pool.query(`SELECT * FROM articles WHERE auteur_id = $1`, [id])
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        const articles: Article[] = articlesRows.rows.map(
            (row: any) => new Article(
                row.id,
                row.titre,
                row.contenu,
                row.date,
                row.auteurId,
                row.publie
            )
        );
        return articles;
    }

    async getArticleByPage(page: number, parPage: number): Promise<Article[]> {
        const articlesRows = await pool.query(`
            SELECT * FROM articles
            LIMIT $2 OFFSET ($1-1)*$2`, [page, parPage])
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        const articles: Article[] = articlesRows.rows.map(
            (row: any) => new Article(
                row.id,
                row.titre,
                row.contenu,
                row.date,
                row.auteurId,
                row.publie
            )
        );
        return articles;
    }

    async createArticle(body:any): Promise<string> {
        const { titre, contenu, auteur_id, date, publie  } = body;
        const value = await pool.query(`
            INSERT INTO articles (titre, contenu ,auteur_id,date, publie)
            VALUES ($1, $2, $3, $4, $5)
            `,[titre, contenu ,auteur_id,date, publie] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        console.log('Article crée !');
        return 'Article crée !';
    }

    async updateArticle(id: number, body:any): Promise<string> {
        const { titre, contenu, auteur_id, date, publie  } = body;
        const value = await pool.query(`
            UPDATE articles SET
            titre = $1,
            contenu = $2,
            auteur_id = $3,
            date  = $4,
            publie = $5
        WHERE id = $6`,
    [titre, contenu, auteur_id, date, publie, id] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Article modifié !';
    }

    async deleteArticle(id: number): Promise<string> {

        const value = await pool.query(`
        DELETE FROM articles WHERE id = $1`, [id] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        return 'Article supprimé !';
    }

    async getInsertId(): Promise<number> {
        const value = await pool.query(`SELECT MAX(id) FROM articles`)
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        console.log('Article_id :', value.rows[0].max);
        return value.rows[0].max;
    }
}
