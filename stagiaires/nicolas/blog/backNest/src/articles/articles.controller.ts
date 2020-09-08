import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {

    constructor(private readonly articlesService:ArticlesService){}

    @Get()
    getAllArticles(){

        this.articlesService.getAllArticles()

    }

}
