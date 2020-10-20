import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DifficultyEnum } from 'src/enum/difficulty.enum';
import { StatusEnum } from 'src/enum/status.enum';
import { ImagesEntity } from 'src/modules/images/entities/images.entity';
import { TagsEntity } from 'src/modules/tags/entities/tags.entity';
import { MembersEntity } from 'src/modules/members/entities/members.entity';
import { type } from 'os';
import { MealTypesEntity } from 'src/modules/meal-types/entities/meal-types.entity';
import { IngredientsEntity } from 'src/modules/ingredients/entities/ingredients.entity';
import { RatingsEntity } from 'src/modules/ratings/entities/ratings.entity';

@Entity('recipes')
export class RecipesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(
    type => IngredientsEntity,
    ing => ing.recipes,
    {
      cascade: ['insert', 'update'],
      eager: true,
    },
  )
  @JoinTable()
  ingredients: IngredientsEntity[];

  @Column()
  instructions: string;

  @Column({
    nullable: true,
  })
  tipsAndTricks: string;

  @Column({
    type: 'enum',
    enum: DifficultyEnum,
  })
  difficulty: DifficultyEnum;

  @Column()
  prepTime_Minutes: number;

  @Column()
  cookTime_Minutes: number;

  @Column()
  servings: number;

  @ManyToOne(
    type => MealTypesEntity,
    mealType => mealType.recipes,
  )
    @JoinColumn()
  mealType: MealTypesEntity;

  @Column({
    default: false,
  })
  private: boolean;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.IN_PROGRESS,
  })
  status: StatusEnum;

  @Column({
    default: false,
  })
  toDelete: boolean;

  @ManyToOne(
    type => MembersEntity,
    author => author.recipes,
    {
      cascade: ['insert', 'update'],
      eager: true,
    },
  )
  @JoinColumn()
  author: MembersEntity;

  @Column({
    nullable: true,
  })
  publishDate: Date;

  @Column({
    nullable: true,
  })
  spotlightDate: Date;

  @Column({
    default: false,
  })
  spotlithed: boolean;

  @OneToMany(
    type => ImagesEntity,
    img => img.recipe,
    {
      nullable: true,
      cascade: ['insert', 'update'],
      eager: true,
    },
  )
  images: ImagesEntity[];

  @ManyToMany(
    type => TagsEntity,
    tag => tag.recipes,
    {
      nullable: true,
      cascade: ['insert', 'update'],
      eager: true,
    },
  )
  @JoinTable()
  tags: TagsEntity;

  @OneToMany(
    type => RatingsEntity,
    rating => rating.recipe,
    {
      nullable: true,
      cascade: ['insert', 'update'],
      eager: true,
    },
  )
  ratings: RatingsEntity[];
}
