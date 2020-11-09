import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './modules/users-sans-orm/users.controller';
import { UsersService } from './modules/users-sans-orm/users.service';
import { UsersModule } from './modules/users-sans-orm/users.module';
import { ProductsModule } from './modules/_example-tuto/products/products.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './modules/_example-tuto/categories/categories.module';
import * as dotenv from 'dotenv';
import { CategoriesEntity } from './modules/_example-tuto/categories/entities/categories.entity';
import { StagiaireEntity } from './modules/stagiaires/entities/stagiaire.entity';
import { NationalityEntity } from './modules/stagiaires/entities/nationality.entity';
import { StagiairesService } from './modules/stagiaires/stagiaires.service';
import { RoleEntity } from './modules/roles/entities/role.entity';
import { RolesModule } from './modules/roles/roles.module';
import { StagiairesModule } from './modules/stagiaires/stagiaires.module';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forFeature([
      StagiaireEntity, 
      NationalityEntity,
      RoleEntity
    ]),
    UsersModule, 
    StagiairesModule,
    RolesModule,
    // ProductsModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [StagiaireEntity, NationalityEntity, RoleEntity],  //"dist/**/*.entity{.ts,.js}" recupere l'ensemble des fichiers 'Entity'
      synchronize: true,
      logging: true // permet de logger dans la console les requetes sql qui passent
    }),
    // CategoriesModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, StagiairesService],
})
export class AppModule  {
}
