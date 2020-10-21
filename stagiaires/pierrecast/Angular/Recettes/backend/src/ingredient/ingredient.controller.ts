import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AddIngredientDto } from './dtos/add-ingredient.dtos';
import { UpdateIngredientDto } from './dtos/update-ingredients.dtos';
import { IngredientEntity } from './entities/ingredient.entity';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
export class IngredientController {
    constructor(
        private ingredientService: IngredientService,
    ) { }

    @Get(':id')
    async getIngredientById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<IngredientEntity> {
        return await this.ingredientService.getIngredientById(id);
    }

    @Get()
    async getAllIngredients(): Promise<IngredientEntity[]> {
        return await this.ingredientService.getAllIngredients();
    }

    @Post()
    async addIngredient(
       @Body() addIngredientDto: AddIngredientDto
    ): Promise<IngredientEntity> {
        return await this.ingredientService.addIngredient(addIngredientDto);
    }

    @Patch(':id')
    async updateIngredient(
       @Body() updateIngredientDto: UpdateIngredientDto,
       @Param('id', ParseIntPipe) id :number
    ): Promise<IngredientEntity> {
        return await this.ingredientService.updateIngredient(id, updateIngredientDto);
    }

    @Delete(':id')
    async removeIngredient(
        @Param('id', ParseIntPipe) id :number
    ) {
        return this.ingredientService.removeIngredient(id);
    }
}
