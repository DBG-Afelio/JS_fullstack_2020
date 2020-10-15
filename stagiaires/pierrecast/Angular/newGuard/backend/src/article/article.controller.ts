import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';

import { ArticleEntity } from './entities/article.entity';
import { ArticleService } from './article.service';
import { AddArticleDto } from './dtos/add-article.dto';
import { UpdateArticleDto } from './dtos/update-article.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthorService } from 'src/author/author.service';
import { Roles } from 'src/decorators/roles.decorators';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/role.guards';
import { User } from 'src/decorators/user.decorators';
import { UserEntity } from 'src/user/entities/user.entity';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService: ArticleService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Roles('AUTHOR')
    @Get('mes-articles')
    async getMyArticles(
        @User() user
       
    ): Promise<ArticleEntity[]> {
        console.log('user' ,user);//user.id = 24
        return await this.articleService.getMyArticles(user.id);
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
