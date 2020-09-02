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

    static fromDto(articleDto:ArticleDto):Article{

        return new Article(
            articleDto.id,
            articleDto.titre,
            articleDto.contenu,
            articleDto.auteur_id,
            articleDto.date,
            articleDto.publie
            )


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