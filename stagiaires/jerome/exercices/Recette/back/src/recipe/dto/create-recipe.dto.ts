import { Ingredient } from "src/ingredient/entities/ingredient.entity";
import { CreatePictureDto } from "src/picture/dto/create-picture.dto";
import { CreateStepDto } from "src/step/dto/create-step.dto";
import { CreateTagDto } from "src/tag/dto/create-tag.dto";
import { Tag } from "src/tag/entities/tag.entity";

export class CreateRecipeDto {

    name:string;
    preparationTime:number;
    cookingTime:number;
    level:number;
    people:number;
    evaluation:number;
    pictures:CreatePictureDto[];
    tags:Tag[];
    steps:CreateStepDto[];
    ingredients:Ingredient[];
}