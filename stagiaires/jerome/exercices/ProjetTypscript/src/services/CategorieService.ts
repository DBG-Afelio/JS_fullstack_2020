import {pool} from "../pool";

export class CategorieService{

    async  getAllCategories(){
        let categories=await pool.query('SELECT * FROM categories')
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return categories.rows;

    }

    async  getCategorieById(id:number){
    let categorie = await pool.query('SELECT * FROM categories WHERE id_categorie=$1',[id])
    .catch((error : Error)=>{
            console.log(error);
            throw new Error('Demande Introuvable');
        })
        return categorie.rows;
    }

    async  postNewCategories(nom:string){
        await pool.query('INSERT INTO categories(nom_categorie) VALUES ($1)',[nom])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }

    async  deleteCategories(id:number){
        await pool.query('DELETE FROM categories WHERE id_categorie=$1',[id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error("erreur");
        })
        return 1;
    }

    async  modifieCategories(id:number,nom:string){
        await pool.query('UPDATE categories SET (nom_categorie)  = ($1) WHERE id_categorie=$2',[nom,id])
        .catch((error : Error)=>{
            console.log(error);
            throw new Error('Format Invalide');
        })
        return 1;
    }
}

