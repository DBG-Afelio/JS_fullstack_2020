import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IngredientEntity } from './entities/ingredient.entity';
import { AddIngredientDto } from './dtos/add-ingredient.dtos';
import { UpdateIngredientDto } from './dtos/update-ingredients.dtos';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IngredientService {
    constructor(
        @InjectRepository(IngredientEntity)
        private ingredientRepository : Repository<IngredientEntity>
    ) {}

    async getAllIngredients(): Promise<IngredientEntity[]> {
        return await this.ingredientRepository.find();
    }

    async getIngredientById(id: number): Promise<IngredientEntity> {
        return await this.ingredientRepository.findOne(id);
    }

    async addIngredient(ingredient: AddIngredientDto): Promise<IngredientEntity> {
        return await this.ingredientRepository.save({
            ...ingredient, 
           
        });
    }

    async updateIngredient(id: number, ingredient: UpdateIngredientDto): Promise<IngredientEntity> {
        const newIngredient = await this.ingredientRepository.preload({
            id,
            ...ingredient, 
            
        });
        if (!newIngredient) {
            throw new NotFoundException(`Ingredient ${id} inexistant`);
        }
        return await this.ingredientRepository.save(newIngredient);

    }

    async removeIngredient(id:number) {
        const ingredientToRemove = await this.ingredientRepository.findOne(id);
        if (!ingredientToRemove) {
            throw new NotFoundException(`Ingrédient ${id} inexistant`);
        }
        this.ingredientRepository.remove(ingredientToRemove)
    }  

}
