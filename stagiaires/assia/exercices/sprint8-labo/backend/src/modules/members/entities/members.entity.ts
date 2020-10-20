import { RessourceEnum } from 'src/enum/ressource.enum';
import { RatingsEntity } from 'src/modules/ratings/entities/ratings.entity';
import { RecipesEntity } from 'src/modules/recipes/entities/recipes.entity';
import { RolesEntity } from 'src/modules/roles/entities/roles.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity(RessourceEnum.MEMBERS)
export class MembersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  firstname: string;

  @Column({
    nullable: true,
  })
  lastname: string;

  @Column({
    nullable: true,
  })
  pseudo: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    nullable: true,
  })
  avatarUrl: string;

  @ManyToMany(
    type => RecipesEntity,
    // favRecipe => favRecipe.recipe
    {
      nullable: true,
      eager: true,
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinTable()
  favorites: RecipesEntity[];

  @ManyToOne(
    type => RolesEntity,
    role => role.members,
    {
      eager: true,
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  role: RolesEntity;

  @OneToMany(
    type => RatingsEntity,
    rating => rating.author, {
      nullable: true,
    }
  )
  ratings: RatingsEntity[];
  
  @OneToMany(
    type => RecipesEntity,
    (recipe) => recipe.author,
    {
      nullable: true,
    }
  )
  recipes: RecipesEntity[];
}
