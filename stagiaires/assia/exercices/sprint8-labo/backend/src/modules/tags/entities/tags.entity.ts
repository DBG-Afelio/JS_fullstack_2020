import { RessourceEnum } from 'src/enum/ressource.enum';
import { RecipesEntity } from 'src/modules/recipes/entities/recipes.entity';
import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity(RessourceEnum.TAGS)
export class TagsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  imgUrl: string;

  @ManyToMany(
    type => RecipesEntity,
    (rec) => rec.tags,
    {
      nullable:true,
    }
  )
  recipes: RecipesEntity[];
}
