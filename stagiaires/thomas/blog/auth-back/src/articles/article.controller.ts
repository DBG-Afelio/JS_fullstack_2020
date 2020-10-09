import { Body, Controller, Get, Post, Query, Req, UseGuards } from "@nestjs/common";
import { User } from "src/decorators/user.decorator";
import { JwtAuthGuard } from "src/users/guards/jwt-auth.guard";
import { ArticlesEntity } from "./article.entity";
import { ArticleService } from "./article.service";
import { AddArticleDto } from "./dto/add-article-dto";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/decorators/roles.decorator";
import { UserRoleEnum } from "src/enums/user-role.enum";
import { RolesGuard } from "src/users/guards/role.guard";


@Controller('articles')
export class ArticleController {
    
    constructor(
        private articleService: ArticleService
    ){}


    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRoleEnum.ADMIN, UserRoleEnum.USER, UserRoleEnum.INVITE)
    async getAllArticles(@User() user): Promise<ArticlesEntity[]> {
        return await this.articleService.getArticles(user);    
    }
 
    @Post('post-article')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRoleEnum.ADMIN, UserRoleEnum.USER)
    async addArticle( @Body() article: AddArticleDto, 
                      @User() user): Promise<ArticlesEntity> {

        return await this.articleService.addArticle(article, user);
    }   

} 