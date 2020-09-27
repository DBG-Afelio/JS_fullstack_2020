import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { ArticleEntity } from './entities/article.entity';
import { ArticleService } from './article.service';
import { AddArticleDto } from './dtos/add-article';
import { UpdateArticleDto } from './dtos/update-article';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ) {

    }

    @Get(':id')
    async getArticleById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<ArticleEntity> {
        return await this.articleService.getArticleById(id);
    }

    @Get()
    async getAllArticles(): Promise<ArticleEntity[]> {
        return await this.articleService.getAllArticles();
    }

    @Post()
    async addArticle(
       @Body() addArticleDto: AddArticleDto
    ): Promise<ArticleEntity> {
        return await this.articleService.addArticle(addArticleDto);
    }

    @Patch(':id')
    async updateArticle(
       @Body() updateArticleDto: UpdateArticleDto,
       @Param('id', ParseIntPipe) id :number
    ): Promise<ArticleEntity> {
        return await this.articleService.updateArticle(id, updateArticleDto);
    }

    @Delete(':id')
    async removeArticle(
        @Param('id', ParseIntPipe) id :number
    ) {
        return this.articleService.removeArticle(id);
    }
}
