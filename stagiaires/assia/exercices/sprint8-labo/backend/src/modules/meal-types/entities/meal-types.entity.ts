import { RessourceEnum } from 'src/enum/ressource.enum';
import { RecipesEntity } from 'src/modules/recipes/entities/recipes.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity(RessourceEnum.MEAL_TYPES)
export class MealTypesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imgUrl: string;

  @OneToMany(
    type => RecipesEntity,
    recipe => recipe.mealType,
    {
      nullable: true,
    },
  )
  recipes: RecipesEntity[];
}
