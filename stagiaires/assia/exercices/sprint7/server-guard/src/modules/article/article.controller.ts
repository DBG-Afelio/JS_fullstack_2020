import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ACGuard, UseRoles } from 'nest-access-control';
import { Observable } from 'rxjs';
import { roles } from 'src/constants/roles';
import { RolesEnum } from 'src/enum/roles.enum';
import { Roles } from 'src/guards/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAuthGuard } from 'src/passport/jwt-auth.guard';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article-dto';
import { GetArticleFiltersDto } from './dto/get-article-filters-dto';
import { UpdateArticleDto } from './dto/update-article-dto';
import { ArticleEntity } from './entities/article.entity';

//, JwtAuthGuard, RolesGuard, ACGuard
@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  // example :
  // @UseRoles({
  //   resource: 'video',
  //   action: 'read',
  //   possession: 'any',
  // })
  // @Get()
  // root(@UserRoles() userRoles: any) {
  //   return this.appService.root(userRoles);
  // }

  // @Roles('')
  @Get()
  getArticleList(
    @Query() myFilters: GetArticleFiltersDto,
  ): Promise<ArticleEntity[]> {
    console.log('-------------getall ');

    if (Object.keys(myFilters).length) {
      console.log('with filters: ', myFilters);
      return this.articleService.getFiltered(myFilters);
    } else {
      console.log(' with no filters ');
      return this.articleService.getAll();
    }
  }

  //   @Roles()
  @Get(':id')
  getArticle(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
  ): Promise<ArticleEntity> {
    return this.articleService.getOne(id);
  }

  @UseGuards(JwtAuthGuard) 
  @Post()
  createArticle(
    @Body() createArticle: CreateArticleDto,
  ): Promise<ArticleEntity> {
    return this.articleService.addOne(createArticle);
  }
  @UseGuards(JwtAuthGuard) 
  // @UseRoles({
  //   resource: 'article',
  //   action: 'update',
  // })
  @Patch(':id')
  updateArticle(
    // @Req() req,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
    @Body() upArticle: UpdateArticleDto,
  ): Promise<ArticleEntity> {
    return this.articleService.update(id, upArticle);
 
  }
  @UseGuards(JwtAuthGuard) 
  @Delete(':id')
  removeArticle(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
  ): Promise<any> {
    return this.articleService.delete(id);
  }
}
