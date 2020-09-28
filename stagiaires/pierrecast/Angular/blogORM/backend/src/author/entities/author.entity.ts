
import { ArticleEntity } from "src/article/entities/article.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('author')
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
    })
    firstname: string;

    @Column({
        length: 50,
    })
    lastname: string;

    @Column({
        length: 50,
    })
    
    email: string;

    @Column()
    presentation: string;

    @OneToMany(
        type => ArticleEntity,
        (article) => article.author,
        {
            cascade: true,
            nullable: true,
            eager:true
        }
    )
    articles: ArticleEntity[];
}
