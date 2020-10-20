import { RessourceEnum } from 'src/enum/ressource.enum';
import { MembersEntity } from 'src/modules/members/entities/members.entity';
import { RecipesEntity } from 'src/modules/recipes/entities/recipes.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity(RessourceEnum.TAGS)
export class RatingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  scoring: number;

  @Column()
  date: Date;

  @ManyToOne(
    type => RecipesEntity,
    rec => rec.ratings,
  )
  @JoinColumn()
  recipe: RecipesEntity;

  @ManyToOne(
    type => MembersEntity,
    (auth) => auth.ratings
  )
  @JoinColumn()
  author: MembersEntity;
}
