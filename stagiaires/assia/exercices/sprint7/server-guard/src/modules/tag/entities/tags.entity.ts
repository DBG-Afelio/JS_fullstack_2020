import { ArticleEntity } from "src/modules/article/entities/article.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class TagsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(
        type => ArticleEntity, 
        (article) => article.tags,
        {
            nullable: true,
        })
    articles: ArticleEntity[];
}
