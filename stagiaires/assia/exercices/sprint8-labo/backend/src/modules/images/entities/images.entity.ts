import { RessourceEnum } from 'src/enum/ressource.enum';
import { RecipesEntity } from 'src/modules/recipes/entities/recipes.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity(RessourceEnum.IMAGES)
export class ImagesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  caption: string;

  @Column()
  setAsMain: boolean;

  @ManyToOne(
    type => RecipesEntity,
    recipe => recipe.images,
  )
  @JoinColumn()
  recipe: RecipesEntity;
}
