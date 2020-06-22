import { Article } from "./articles";

export class Magasin{
    liste:Article[]=[];

    constructor(tab:any[]){

        tab.forEach(element => {

            let article=new Article(element.titre,element.Prix,element.image.toute_petite,element.id);
            this.liste.push(article);

        });
    }
    getArticleById(id:number):Article|undefined{

        return this.liste.find(object=> id==object.id );

    }
}