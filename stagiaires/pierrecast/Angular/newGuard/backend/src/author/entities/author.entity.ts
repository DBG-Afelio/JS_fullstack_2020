
import { ArticleEntity } from "src/article/entities/article.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('author')
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
    })
    familyname: string;

    @Column({
        length: 50,
    })
    firstname: string;

    @Column({
        length: 50,
    })
    email: string;

    @Column()
    presentation: string;

    @Column()
    active: boolean;  
    
    @OneToOne(type => UserEntity, {
        eager: true
    })
    @JoinColumn()
    user: UserEntity;
 
    @OneToMany(
        type => ArticleEntity,
        (article) => article.author,
        {
            cascade: true,
            nullable: true
        }
    )
    articles: ArticleEntity[];
}
