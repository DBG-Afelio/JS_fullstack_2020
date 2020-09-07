import { ArticleDto } from "./dtos/articleDto";

export class Article {

    constructor(
       public id:number,
       public titre:string,
       public contenu:string,
       public auteurId:number,
       public date:Date,
       public publie :boolean
    ){}

    static isArticleDto(object:any):object is ArticleDto{

        const articleDtoProperties = ["id","titre","contenu","auteur_id","date","publie"]
        let isDto = articleDtoProperties.every(property => property in object)
        return isDto

    }

    static fromDto(articleDto:any):Article {
        if(Article.isArticleDto(articleDto)){

            return new Article(
                articleDto.id,
                articleDto.titre,
                articleDto.contenu,
                articleDto.auteur_id,
                articleDto.date,
                articleDto.publie
            )

        }else{

            throw new Error('not_corresponding_object')

        }
        
    }

    
    toDto():ArticleDto{

        return {

            id:this.id,
            titre:this.titre,
            contenu:this.contenu,
            auteur_id:this.auteurId,
            date:this.date,
            publie:this.publie

        }

    }
}