import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AddArticleDto } from "./dtos/add-article";
import { UpdateArticleDto } from "./dtos/update-article";
import { ArticleEntity } from "./entities/article.entity";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private articleRepository : Repository<ArticleEntity>
    ) {

    }

    async getAllArticles(): Promise<ArticleEntity[]> {
        return await this.articleRepository.find();
    }

    async getArticleById(id: number): Promise<ArticleEntity> {
        return await this.articleRepository.findOne(id);
    }

    async addArticle(article: AddArticleDto): Promise<ArticleEntity> {
        return await this.articleRepository.save({
            ...article, 
            author:{id:article.authorId}});
    }

    async updateArticle(id: number, article: UpdateArticleDto): Promise<ArticleEntity> {
        const newArticle = await this.articleRepository.preload({
            id,
            ...article, 
            author:{id:article.authorId}
        });
        if (!newArticle) {
            throw new NotFoundException(`Article ${id} inexistant`);
        }
        return await this.articleRepository.save(newArticle);

    }

    async removeArticle(id:number) {
        const articleToRemove = await this.articleRepository.findOne(id);
        if (!articleToRemove) {
            throw new NotFoundException(`Article ${id} inexistant`);
        }
        this.articleRepository.remove(articleToRemove)
    }
    
}
