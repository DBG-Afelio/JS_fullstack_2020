import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';

@Module({
  controllers: [IngredientController],
  providers: [IngredientService]
})
export class IngredientModule {}
