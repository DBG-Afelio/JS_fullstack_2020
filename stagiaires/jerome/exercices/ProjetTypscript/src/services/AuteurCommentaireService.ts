import {pool} from "../pool";

export class AuteurCommentaireService{

    async  getAuteursCommentaires(){
        let auteursCommentaires=await pool.query('SELECT * FROM auteurs_commentaires')
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return auteursCommentaires.rows;

    }

    async  getAuteurCommentairesById(id:number){
        let auteurCommentaires=await pool.query('SELECT * FROM auteurs_commentaires WHERE id_auteur_commentaires=$1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return auteurCommentaires.rows;
    }

    async  postNewAuteurCommentaires(nom:string,prenom:string){
        await pool.query('INSERT INTO auteurs_commentaires(nom_auteur_commentaire,prenom_auteur_commentaire) VALUES ($1,$2)',[nom,prenom])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }

    async  deleteAuteurCommentaires(id:number){
        await pool.query('DELETE FROM auteurs_commentaires WHERE id_auteur_commentaires=$1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error("erreur");
        })
        return 1;
    }

    async  modifieAuteurCommentaires(id:number,nom:string,prenom:string){
        await pool.query('UPDATE auteurs_commentaires SET (nom_auteur_commentaire,prenom_auteur_commentaire)  = ($1,$2) WHERE id_auteur_commentaire=$3',[nom,prenom,id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }
}
