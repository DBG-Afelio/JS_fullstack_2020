import { pool } from "../pool";
import { ArticleDto } from "../models/dtos/articleDto";
import { Article } from "../models/article";


export class ArticleDb {

    static async getAllArticles():Promise <Article[]>{

        const result = await pool.query("SELECT * FROM Articles")
        const articles:Article[] = result.rows.map(article => {

            return new Article(

                article.id,
                article.titre,
                article.contenu,
                article.auteur_id,
                article.date,
                article.publie

            )

        })
        return articles

    }
    static async getArticleByid(id:string):Promise <Article[]>{

        const result = await pool.query("SELECT * FROM Articles WHERE id = $1",[id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        const articles:Article[] = result.rows.map(article => {

            return new Article(

                article.id,
                article.titre,
                article.contenu,
                article.auteur_id,
                article.date,
                article.publie

            )

        })
        return articles

    }

    static async createArticle(bodyRequest:ArticleDto){

        const {titre,contenu,auteur_id,date,publie} = bodyRequest;

        const result = await pool.query("INSERT INTO Articles (titre,contenu,auteur_id,date,publie) VALUES ($1,$2,$3,$4,$5) ",[titre,contenu,auteur_id,date,publie]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }
    static async modifyArticle(id:string, bodyRequest:ArticleDto){

        const {titre,contenu,auteur_id,date,publie} = bodyRequest;


        const result = await pool.query("UPDATE Articles SET titre = $1,contenu = $2,auteur_id = $3,date = $4,publie = $5 WHERE id = $6 ",[titre,contenu,auteur_id,date,publie,id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }
    static async deleteArticle(id:string){

        const result = await pool.query("DELETE FROM Articles WHERE id = $1 ",[id]).catch(error => {

            console.log(error);
            throw new Error('error');

        })
        return result.rows

    }
}
