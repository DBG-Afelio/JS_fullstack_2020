import { GetIngredientDto } from "./Dtos/IngredientDto/get-ingredient.dto";

export class Ingredient {

    constructor(
        public label:string,
        public kcal:number,
        public protein:number,
        public fat:number,
        public carb:number
    ){}

    static fromDto(ingredientDto:GetIngredientDto):Ingredient{
        return new Ingredient(

            ingredientDto.label,
            ingredientDto.kcal,
            ingredientDto.protein,
            ingredientDto.fat,
            ingredientDto.carb

        )
    }

    toDto(){
        return{

            label:this.label,
            kcal:this.kcal,
            protein:this.protein,
            fat:this.fat,
            carb:this.carb,
        }
    }
}
