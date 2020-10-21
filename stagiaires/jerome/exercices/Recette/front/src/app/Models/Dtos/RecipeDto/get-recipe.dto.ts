import { Ingredient } from "../../ingredient";
import { Tag } from "../../tag";
import { Step } from "../../step";
import { Picture } from "../../picture";
import { User } from "../../user";

export class GetRecipeDto{

    name:string;
    preparationTime:number;
    cookingTime:number;
    level:number;
    people:number;
    evaluation:number;
    pictures:Picture[];
    tags:Tag[];
    steps:Step[];
    ingredients:Ingredient[];
    user:User;
    
}