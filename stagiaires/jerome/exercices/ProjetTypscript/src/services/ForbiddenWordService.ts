import {pool} from "../pool";

export class ForbiddenWordService{
    async  getAllForbiddenWords(){
        let words=await pool.query('SELECT * FROM forbidden_words')
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return words.rows;
    
    }
    
    async  getForbiddenWordsById(id:number){
       let word = await pool.query('SELECT * FROM forbidden_words WHERE id_forbidden_word=$1',[id])
       .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return word.rows;
    }
    
    async  postNewForbiddenWords(word:string){
        await pool.query('INSERT INTO forbidden_words(word) VALUES ($1)',[word])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }
    
    async  deleteForbiddenWords(id:number){
        await pool.query('DELETE FROM forbidden_words WHERE id_forbidden_word=$1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error("erreur");
        })
        return 1;
    }
    
    async  modifieForbiddenWords(id:number,word:string){
        await pool.query('UPDATE forbidden_words SET (word)  = ($1) WHERE id_forbidden_word=$2',[word,id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }
    
}