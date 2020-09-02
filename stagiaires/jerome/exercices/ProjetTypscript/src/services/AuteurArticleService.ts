import {pool} from "../pool";

export class AuteurArticleService{


    async  getAllAuteursArticles(){
        let auteursArticles=await pool.query('SELECT * FROM auteurs_articles')
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return auteursArticles.rows;
    
    }
    
    async  getAuteurArticlesById(id:number){
        let auteurArticles=await pool.query('SELECT * FROM auteurs_articles WHERE id_auteur_articles=$1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return auteurArticles.rows;
    }
    
    async  postNewAuteurArticles(nom:string,prenom:string,email:string,presentation:string){
        await pool.query('INSERT INTO articles(nom_auteur_articles,prenom_auteur_articles,email_auteur_articles,presentation_auteur_articles) VALUES ($1,$2,$3,$4)',[nom,prenom,email,presentation])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }
    async  deleteAuteurArticles(id:number){
        await pool.query('DELETE FROM auteurs_articles WHERE id_auteur_articles=$1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error("erreur");
        })
        return 1;
    }
    
    async  modifieAuteurArticles(id:number,nom:string,prenom:string,email:string,presentation:string){
        await pool.query('UPDATE auteurs_articles SET (nom_auteur_articles,prenom_auteur_articles,email_auteur_articles,presentation_auteur_articles)  = ($1,$2,$3,$4) WHERE id_auteur_articles=$5',[nom,prenom,email,presentation,id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }

}