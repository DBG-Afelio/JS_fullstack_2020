import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { RolesEnum } from 'src/enum/roles.enum';
import { Roles } from 'src/guards/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAuthGuard } from 'src/passport/jwt-auth.guard';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article-dto';
import { UpdateArticleDto } from './dto/update-article-dto';
import { ArticleEntity } from './entities/article.entity';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('articles')
export class ArticleController {
    constructor(
      private readonly articleService: ArticleService,
    ) {}
  
  //   @Roles()
      @Get()
      getArticleList(
          @Req() req
      ): Promise<ArticleEntity[]> {
          return this.articleService.getAll();
      }
  
  //   @Roles()
      @Get(':id')
      getArticle(
          @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: number
      ): Promise<ArticleEntity> {
          return this.articleService.getOne(id);
      }
  
      @Post()
      createArticle(
        @Body() createArticle: CreateArticleDto
      ): Promise<ArticleEntity> {
        return this.articleService.addOne(createArticle);
      }

  //   @Roles(RolesEnum.MASTER, RolesEnum.AUTHOR)
      @Patch(':id')
      updateArticle(
          @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: number,
          @Body() upArticle: UpdateArticleDto
      ): Promise<ArticleEntity> {
          return this.articleService.update(id, upArticle);
      }
  
    //  @Roles(RolesEnum.MASTER, RolesEnum.AUTHOR)
      @Delete(':id')
      removeArticle(
      @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: number
      ): Promise<any> {
          return this.articleService.delete(id);
          }
      }
  