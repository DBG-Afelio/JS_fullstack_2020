import {pool} from "../pool";

export class CommentaireService{

    async  getAllWords(){

        let controlWords=await pool.query('SELECT word FROM forbidden_words');
        return controlWords.rows;
        
    }

    async  controlWords(commentaires:any[]){
        const words= await this.getAllWords();
        const commentairesCensure=commentaires;
        commentairesCensure.forEach(commentaire=>{

            words.forEach((word:any)=>{
                if(commentaire.titre_commentaire.includes(word.word)){

                    commentaire.titre_commentaire=commentaire.titre_commentaire.replace(word.word,'*'.repeat(word.word.length));

                }
            })
            

        });
        return commentairesCensure;

    }

    async  findForbiddenWord(text:string){
        const words= await this.getAllWords();
        
        return words.some((word:any)=>text.includes(word.word));
        

    }

    async  getAllCommentaires(){
        let commentaires = await pool.query('SELECT * FROM commentaires c INNER JOIN auteurs_commentaires ac ON c.id_auteur_commentaire = ac.id_auteur_commentaire INNER JOIN articles a ON c.id_article = a.id_article')
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return this.controlWords(commentaires.rows);
    }

    async  getCommentaireById(id:number){
        let commentaire= await pool.query('SELECT * FROM commentaires c INNER JOIN auteurs_commentaires ac ON c.id_auteur_commentaire = ac.id_auteur_commentaire INNER JOIN articles a ON c.id_article = a.id_article WHERE id_commentaire = $1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return commentaire.rows;
    }

    async  postNewCommentaire(titre:string, date:Date, id_auteur_commentaire:number, id_article:number){
        if(await this.findForbiddenWord(titre)){

            throw new Error('Mots Interdit');

        }else{
            await pool.query('INSERT INTO commentaires(titre_commentaire,date_commentaire,id_auteur_commentaire,id_article) VALUES ($1,$2,$3,$4)',[titre,date,id_auteur_commentaire,id_article])
            .catch((error : Error)=>{
                console.log(error);
                throw new Error('Format Invalide');
            })
        }
        return 1;
    }

    async  deleteCommentaire(id:number){
        await pool.query('DELETE FROM commentaires WHERE id_commentaire=$1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error("erreur");
        })
        return 1;
    }

    async  modifieCommentaire(id:number,titre:string, date:Date, id_auteur_commentaire:number, id_article:number){
        await pool.query('UPDATE commentaires SET (titre_commentaire,date_commentaire,id_auteur_commentaire,id_article)  = ($1,$2,$3,$4) WHERE id_commentaire=$5',[titre,date,id_auteur_commentaire,id_article,id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }
}