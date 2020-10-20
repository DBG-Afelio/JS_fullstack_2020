import { Module } from '@nestjs/common';
import { MyRecipeIngredientsController } from './ingredient-lines.controller';
import { MyRecipeIngredientsService } from './ingredient-lines.service';

@Module({
  controllers: [MyRecipeIngredientsController],
  providers: [MyRecipeIngredientsService]
})
export class MyRecipeIngredientsModule {}
