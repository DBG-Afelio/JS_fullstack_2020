import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientService {

  constructor(@InjectRepository(Ingredient)
  private ingredientRepository:Repository<Ingredient>,){}

  create(createIngredientDto: CreateIngredientDto) {
    const newIngredient=new Ingredient();
    newIngredient.label=createIngredientDto.label;

    if(createIngredientDto.kcal){

        newIngredient.kcal=createIngredientDto.kcal

    }else if(createIngredientDto.protein){

        newIngredient.protein=createIngredientDto.protein;

    }else if(createIngredientDto.fat){

        newIngredient.fat=createIngredientDto.fat;

    }else if(createIngredientDto.carb){

        newIngredient.carb=createIngredientDto.carb;

    }
    return this.ingredientRepository.save(newIngredient);
  }

  findAll() {
    return this.ingredientRepository.find();
  }

  findOne(id: number) {
    return this.ingredientRepository.findOne(id);
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    updateIngredientDto.id=id;
    return this.ingredientRepository.save(updateIngredientDto);
  }

  remove(id: number) {
    return this.ingredientRepository.softDelete(id);
  }
}
