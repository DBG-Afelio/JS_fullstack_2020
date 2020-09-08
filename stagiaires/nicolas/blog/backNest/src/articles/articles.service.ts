import { Injectable } from '@nestjs/common';
import { Article } from './model/article';

@Injectable()
export class ArticlesService {


    async getAllArticles():Promise<Article[]>{

        return new Promise(()=>{

            return {

                'id':1,
                'titre':"Bonjour"

            }

        })

    }

}
