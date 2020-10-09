import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRoleEnum } from "src/enums/user-role.enum";
import { UserEntity } from "src/users/entity/user.entity";
import { UserService } from "src/users/user.service";
import { Repository } from "typeorm";
import { ArticlesEntity } from "./article.entity";
import { AddArticleDto } from "./dto/add-article-dto";

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(ArticlesEntity)
            private articleRepository: Repository<ArticlesEntity>,
            private userService: UserService
        ) {}

        async getArticles(user): Promise<ArticlesEntity[]> {

            if(user.role === UserRoleEnum.ADMIN) {
                return await this.articleRepository.find()
            }

            return await this.articleRepository.find({user}); ;
        }

        async getArticleById(id: number, user) {
            const article = await this.articleRepository.findOne(id);
            
            if(!article) {
               throw new NotFoundException(`Le CV d'id ${id} n'a pas été trouvé.`)     
            }

            // si admin 
            if (this.userService.isOwnerOrAdmin(article, user)) {
                return article;
            } else {
                throw new UnauthorizedException()
            }

        }

        async addArticle(article: AddArticleDto, user): Promise<ArticlesEntity> {
            const newArticle = this.articleRepository.create(article);
            newArticle.user = user;
            return await this.articleRepository.save(article)
        }


}  