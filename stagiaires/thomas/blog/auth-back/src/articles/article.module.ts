import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "src/users/user.controller";
import { UserModule } from "src/users/user.module";
import { ArticleController } from "./article.controller";
import { ArticlesEntity } from "./article.entity";
import { ArticleService } from "./article.service";

@Module({
    imports: [TypeOrmModule.forFeature([ArticlesEntity]), UserModule],
    controllers: [ArticleController],
    providers: [ArticleService],
    exports: [ArticleService] 
})

export class ArticleModule {} 