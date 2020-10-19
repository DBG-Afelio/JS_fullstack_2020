import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { RecipeModule } from './recipe/recipe.module';
import { TagModule } from './tag/tag.module';
import { PictureModule } from './picture/picture.module';
import { UserModule } from './user/user.module';
import { StepModule } from './step/step.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { AuthenticationModule } from './authentication/authentication.module';


@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({                         //Connection Avec La Base De Données sur Postgres
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'recipe',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,    //Changement auto de la base de donnée
      logging:false,
    }),
    RecipeModule,
    TagModule,
    PictureModule,
    UserModule,
    StepModule,
    IngredientModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
