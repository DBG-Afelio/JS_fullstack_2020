import { IngredientDto } from './IngredientDto';
import { SetIngredientDto } from './SetIngredientDto';

export class Ingredient {
    constructor(
        public id: number,
        public name: string,
        public approved: boolean,
        public imgUrl?: string,
        public proteins?: number,
        public fats?: number,
        public carbs?: number
    ) { }

    public static fromDto(ingredientDto: IngredientDto): Ingredient {
        return new Ingredient(
            ingredientDto.id, 
            ingredientDto.name,
            ingredientDto.approved,
            ingredientDto.imgUrl,
            ingredientDto.proteins,
            ingredientDto.fats,
            ingredientDto.carbs,
        );
    }

    public toDto(): SetIngredientDto {
        return {
            name: this.name,
            approved: this.approved,
            imgUrl: this.imgUrl,
            proteins: this.proteins,
            fats: this.fats,
            carbs: this.carbs,
        }
    }
}
