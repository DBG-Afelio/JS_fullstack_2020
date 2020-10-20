import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { Recipe } from './entities/recipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PictureService } from 'src/picture/picture.service';
import { Picture } from 'src/picture/entities/picture.entity';
import { StepService } from 'src/step/step.service';
import { Step } from 'src/step/entities/step.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Recipe,Picture,Step,User])],
  controllers: [RecipeController],
  providers: [RecipeService,PictureService, StepService, UserService],
  exports:[RecipeService]
})
export class RecipeModule {}
