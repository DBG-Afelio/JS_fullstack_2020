import { RessourceEnum } from 'src/enum/ressource.enum';
import { UnitEnum } from 'src/enum/unit.enum';
import { IngredientsEntity } from 'src/modules/ingredients/entities/ingredients.entity';
import { RecipesEntity } from 'src/modules/recipes/entities/recipes.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity(RessourceEnum.INGREDIENT_LINES)
export class IngredientLinesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => IngredientsEntity,
    ing => ing.ingredientLines,
    {
      eager: true,
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  ingredient: IngredientsEntity;

  @ManyToOne(
    // or ManyToMany ?
    type => RecipesEntity,
    rec => rec.ingredientLines,
  )
  @JoinColumn()
  recipe: RecipesEntity;

  @Column()
  quantity: number;

  @Column()
  unit: UnitEnum;
}
