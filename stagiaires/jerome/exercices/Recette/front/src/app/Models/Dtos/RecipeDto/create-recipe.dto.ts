import { Ingredient } from "../../ingredient";
import { CreatePictureDto } from "../PictureDto/create-picture.dto";
import { StepDto } from "../StepDto/step.dto";
import { TagDto } from "../TagDto/tag.dto";
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
    steps:StepDto[];
    ingredients:Ingredient[];
}