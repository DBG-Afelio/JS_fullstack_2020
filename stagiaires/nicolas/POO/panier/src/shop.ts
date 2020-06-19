import { Article } from "./article";

export class Shop{

    protected articlesList:Article[]=[];

    constructor(tab:any[]){

        tab.forEach(element => {

            let article=new Article(element.titre,element.Prix,element.image.toute_petite,element.id);
            this.articlesList.push(article);

        });
    }
    getArticleById(id:number):Article|undefined{

        return this.articlesList.find(element => id == element.getId() )

    }
    getArticlesList():Article[]{

        return this.articlesList

    }
}