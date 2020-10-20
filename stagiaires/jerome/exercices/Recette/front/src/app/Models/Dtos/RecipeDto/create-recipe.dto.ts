import { Ingredient } from "../../ingredient";
import { CreatePictureDto } from "../PictureDto/create-picture.dto";
import { CreateStepDto } from "../StepDto/create-step.dto";
import { CreateTagDto } from "../TagDto/create-tag.dto";
import { Tag } from "../../tag";

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