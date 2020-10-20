import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PictureService } from 'src/picture/picture.service';
import { StepService } from 'src/step/step.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipeService {

  constructor(@InjectRepository(Recipe)
  private recipeRepository:Repository<Recipe>,
  private pictureService:PictureService, 
  private stepService:StepService,
  private userService:UserService){}

  async create(createRecipeDto: CreateRecipeDto,login) {
    const newRecipe=new Recipe();
    newRecipe.name=createRecipeDto.name;
    newRecipe.preparationTime=createRecipeDto.preparationTime;
    newRecipe.cookingTime=createRecipeDto.cookingTime;
    newRecipe.level=createRecipeDto.level;
    newRecipe.people=createRecipeDto.people;
    newRecipe.evaluation=createRecipeDto.evaluation;

    //Gestion Photo Recipe -------------------------------------------------------------------------------
    newRecipe.pictures=[];
    for (const pictureDto of createRecipeDto.pictures) {

        const newPicture= await this.pictureService.create(pictureDto);
        newRecipe.pictures.push(newPicture);

    }
    //Gestion des Tags------------------------------------------------------------------------------------
    for (const tag of createRecipeDto.tags) {
        newRecipe.tags.push(tag)
    }

    //Gestion des Step------------------------------------------------------------------------------------
    for (const step of createRecipeDto.steps) {

        const newStep= await this.stepService.create(step);
        newRecipe.steps.push(newStep);

    }

    //Gestion User-----------------------------------------------------------------------------------------
    const user= await this.userService.findOneByLogin(login);
    newRecipe.user=user;

    //Gestion ingredient-----------------------------------------------------------------------------------
    for (const ingredient of createRecipeDto.ingredients) {
        newRecipe.ingredients.push(ingredient);
    }



    return this.recipeRepository.save(newRecipe);
  }

  async findAll() {
    return await this.recipeRepository.find();
  }

  findOne(id: number) {
    return this.recipeRepository.findOne(id);
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return this.recipeRepository.softDelete(id);
  }
}
