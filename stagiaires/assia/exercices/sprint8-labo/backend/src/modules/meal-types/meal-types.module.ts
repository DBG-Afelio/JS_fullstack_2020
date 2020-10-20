import { Module } from '@nestjs/common';
import { MealTypesController } from './meal-types.controller';
import { MealTypesService } from './meal-types.service';

@Module({
  controllers: [MealTypesController],
  providers: [MealTypesService]
})
export class MealTypesModule {}
