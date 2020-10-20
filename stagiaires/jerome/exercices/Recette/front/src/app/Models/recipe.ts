import { GetRecipeDto } from "./Dtos/RecipeDto/get-recipe.dto";
import { Ingredient } from "./ingredient";
import { Tag } from "./tag";
import { Step } from "./step";
import { Picture } from "./picture";

export class Recipe {

    constructor(
        public name:string,
        public preparationTime:number,
        public cookingTime:number,
        public level:number,
        public people:number,
        public evaluation:number,
        public pictures:Picture[],
        public tags:Tag[],
        public steps:Step[],
        public ingredients:Ingredient[]
    ){}

    static fromDto(recipeDto:GetRecipeDto):Recipe{

        return new Recipe(
            recipeDto.name,
            recipeDto.preparationTime,
            recipeDto.cookingTime,
            recipeDto.level,
            recipeDto.people,
            recipeDto.evaluation,
            recipeDto.pictures,
            recipeDto.tags,
            recipeDto.steps,
            recipeDto.ingredients
        )
    }

    toDto(){
        return{
            name:this.name,
            preparationTime:this.preparationTime,
            cookingTime:this.cookingTime,
            level:this.level,
            people:this.people,
            evaluation:this.evaluation,
            pictures:this.pictures,
            tags:this.tags,
            steps:this.steps,
            ingredients:this.ingredients
        }
    }
}
