import { BadRequestException, ImATeapotException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateArticleDto } from 'src/modules/article/dto/update-article-dto';
import { DeepPartial, Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article-dto';
import { ArticleEntity } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private articlesRepo: Repository<ArticleEntity>,
  ){}

  async getAll(): Promise<ArticleEntity[]> {
    const list: ArticleEntity[] = await this.articlesRepo.find().catch((error) => {
      throw new BadRequestException(error.message, error.name);
    });

    if (!list) {
      throw new NotFoundException(`Ooups, we're having trouble retrieving info`);
    } else if(list.length === 0){
      throw new ImATeapotException(`Huum.. pretty quiete here ! Seems like there's none in the db yet`);
    } 
    return list;
  }

  async getOne(articleId: number): Promise<ArticleEntity> {
    const article: ArticleEntity = await this.articlesRepo.findOne(articleId);
    if(!article){
      throw new NotFoundException(`Ooups, article ${articleId} does not exist !`);
    } else {
      return article;
    }
  }
  
  async addOne(article: CreateArticleDto): Promise<ArticleEntity> {
    return this.articlesRepo.save(article).catch((error) => {
      throw new BadRequestException(error.message, error.name);
    }); ;
  }
  
  async update(id: number, articleUpdated: UpdateArticleDto): Promise<ArticleEntity> {
    const article: ArticleEntity = await this.getOne(id);
    if(article) {
      let update: DeepPartial<ArticleEntity> = await this.articlesRepo.preload(articleUpdated);
      return await this.articlesRepo.save(update).catch((error) => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }

  async delete(id: number): Promise<ArticleEntity> {
    const article: ArticleEntity = await this.getOne(id);
    if(article) {
      return await this.articlesRepo.remove(article).catch((error) => {
        throw new BadRequestException(error.message, error.name);
      });
    }
  }
}
