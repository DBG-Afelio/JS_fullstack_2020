import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticleDto } from './articles/dto/article-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get()
  getArticles():ArticleDto[] {

    this.appService.getArticles

  }*/
}
