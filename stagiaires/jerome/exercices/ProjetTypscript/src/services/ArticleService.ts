import {pool} from "../pool";

export class ArticleService{

    async getAllArticles(){
        const articles = await pool.query('SELECT * FROM articles a INNER JOIN auteurs_articles aa ON a.id_auteur_article = aa.id_auteur_articles')
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return articles.rows;
    }

    async getArticleById(id:number){
        const article= await pool.query('SELECT * FROM articles a INNER JOIN auteurs_articles aa ON a.id_auteur_article = aa.id_auteur_articles WHERE id_article = $1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('erreur sql');
        })
        if(article.rows.length === 0){
            throw new Error('Demande Introuvable');
        }
        return article.rows;
    }

    async postNewArticle(titre:string,contenu:string,date:Date,publie:boolean,id_auteur:number){
        await pool.query('INSERT INTO articles(titre_article,contenu_article,date_article, publie_article,id_auteur_article) VALUES ($1,$2,$3,$4,$5)',[titre,contenu,date,publie,id_auteur])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }

    async deleteArticle(id:number){
        await pool.query('DELETE FROM articles WHERE id_article=$1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error("erreur");
        })
        return 1;
    }

    async modifieArticle(id:number,titre:string,contenu:string,date:Date,publie:boolean,id_auteur:number){
        await pool.query('UPDATE articles SET (titre_article, contenu_article,date_article,publie_article,id_auteur_article)  = ($1,$2,$3,$4,$5) WHERE id_article=$6',[titre,contenu,date,publie,id_auteur,id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }

}