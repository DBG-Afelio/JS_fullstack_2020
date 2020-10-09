import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { UserEntity } from './users/entity/user.entity';
import { TimeStampEntity } from './timestamp/timestamp.entity';
import { ArticlesEntity } from './articles/article.entity';
import { ArticleModule } from './articles/article.module';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';


dotenv.config()

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig]
    }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: Number(process.env.PG_PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [UserEntity, TimeStampEntity, ArticlesEntity],
    synchronize: true
  }), 
  ArticleModule,
  UserModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
