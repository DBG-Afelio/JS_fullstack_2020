import { pool } from '../db/pool';
import { Article } from '../models/Articles.model';
import { Request } from 'express';
import { CreateArticleDto, ArticleDto } from '../dtos/ArticleListDto';

export class ArticlesService{

    async getAllArticles(): Promise<Article[]> {
    const returnValue = await pool.query(`SELECT * FROM articles`)
        .catch(error => {
            console.log('Erreur dans la foncion getAllArticles()', error.stack);
            console.log('ERROR code :', error.code); // code erreur https://www.postgresql.org/docs/9.6/errcodes-appendix.html
            if (error.code.startsWith('42')) {
                throw new Error('SQL_SYNTAX_ERROR');
            } else {
                throw new Error('INDEFINI');
            }
        });
        return returnValue.rows.map(row => Article.fromDb(row));
    }

    async getArticleById(id: number): Promise<Article> {
        const returnValue = await pool.query(`SELECT * FROM articles WHERE id = $1`, [id])
            .catch(error => {
                console.log('Erreur dans la foncion getArticleById()', error.stack);
                console.log('ERROR code :', error.code);
                throw new Error(error);
            });
        return Article.fromDb(returnValue.rows[0]);
    }

    async getLastArticle(): Promise<Article> {
        const returnValue = await pool.query(`SELECT * FROM articles ORDER BY id DESC LIMIT 1`)
            .catch(error => {
                console.log(error.stack);
                console.log('ERROR code :', error.code);
                throw new Error(error);
            });
        return Article.fromDb(returnValue.rows[0]);

    }

    async addArticle(newArticle: CreateArticleDto): Promise<Article> {
        let addedArticle: Article | null ;
        const { titre, contenu, auteurs_id, date, publie } = newArticle;
        await pool.query(`INSERT INTO articles (
            titre,
            contenu,
            auteurs_id,
            date,
            publie
            ) VALUES ($1, $2, $3, $4, $5)`,
            [titre, contenu, auteurs_id, date, publie])
            .catch(error => {
                throw new Error(error);
            });

        addedArticle = await this.getLastArticle();
        return addedArticle;
    }

    async updateArticle(articleToUpdate: ArticleDto, id: number): Promise<Article> {
        console.log(articleToUpdate, id);
        const { titre, contenu, auteurs_id, date, publie } = articleToUpdate;
        await pool.query(`UPDATE articles SET
            titre = $1,
            contenu = $2,
            auteurs_id = $3,
            date = $4,
            publie = $5
            WHERE id = $6`,
            [titre, contenu, auteurs_id, date, publie, id])
            .catch(error => {
                if (error.code.startsWith('23')) {
                    throw new Error('INTROUVABLE');
                } else {
                    throw new Error('INDEFINI');
                }
            });

        const articleUpdated = await this.getArticleById(id)
            .catch(error => {
                console.log('Erreur recup article updated ', error.code, error.stack);
                throw new Error('500');
            });
        console.log(articleUpdated);
        return articleUpdated;
    }
    
    // DELETE /articles/1

}