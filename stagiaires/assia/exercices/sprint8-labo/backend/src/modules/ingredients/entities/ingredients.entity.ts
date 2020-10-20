import { RessourceEnum } from 'src/enum/ressource.enum';
import { IngredientLinesEntity } from 'src/modules/ingredient-lines/entities/ingredient-lines.entity';
import { RecipesEntity } from 'src/modules/recipes/entities/recipes.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity(RessourceEnum.INGREDIENTS)
export class IngredientsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  name: string;

  @Column()
  imgUrl: string;

  @Column({
    default: 0,
  })
  energy_Kc: number;

  @Column({
    default: 0,
  })
  proteins: number;

  @Column({
    default: 0,
  })
  fats: number;

  @Column({
    default: 0,
  })
  carbs: number;

  @Column({
    default: false,
  })
  approved: boolean;

  // @ManyToMany(
  //   type => RecipesEntity,
  //   recipe => recipe.ingredientLines,
  //   {
  //     nullable: true,
  //   },
  // )
  // recipes: RecipesEntity[];

  @OneToMany(
    type => IngredientLinesEntity,
    ingLine => ingLine.ingredient,
    {
      nullable: true,
    },
  )
  ingredientLines: IngredientLinesEntity[];
}
