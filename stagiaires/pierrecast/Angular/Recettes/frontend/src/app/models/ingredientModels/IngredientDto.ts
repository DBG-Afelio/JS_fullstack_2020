
export interface IngredientDto {
    id: number;
    name: string;
    approved: boolean;
    imgUrl?: string;
    proteins?: number;
    fats?: number;
    carbs?: number;
}
