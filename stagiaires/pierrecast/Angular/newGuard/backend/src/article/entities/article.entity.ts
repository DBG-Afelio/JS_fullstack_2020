
import { AuthorEntity } from "src/author/entities/author.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('article')
export class ArticleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;
    
    @Column()
    date: Date;

    @Column()
    published: boolean

    @Column()
    complete: boolean

    @ManyToOne(
        type => AuthorEntity,
        (author) => author.articles,
        {
            nullable: true,
            eager:true
        }
    )
    author: AuthorEntity;
}