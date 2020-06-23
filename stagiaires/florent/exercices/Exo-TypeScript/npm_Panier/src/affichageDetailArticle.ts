import { DetailArticle } from "./detailArticle";

export class AffichageArticle{
    detail:DetailArticle[]=[];

    constructor(tabdetail:any[]){


        tabdetail.forEach(element =>{
            let detailarticle=new DetailArticle(element.titre,element.Prix,element.image.moyenne,element.auteur,element.Pays,element.commentaire,element.id);
            this.detail.push(detailarticle);
        });
    }

    getDetailArticleById(id:number):DetailArticle|undefined{

        return this.detail.find(object=> id==object.id );

    }
}