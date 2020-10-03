import { StatusEnum } from "src/enum/status.enum";
import { ArticleEntity } from "src/modules/article/entities/article.entity";
import { UsersEntity } from "src/modules/user/entities/users.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('comments')
export class CommentsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({
        type: 'enum', 
        enum: StatusEnum, 
        default: StatusEnum.TO_REVIEW
    })
    status: StatusEnum;

    @Column()
    publiDate: Date;

    @ManyToOne(
        type => ArticleEntity,
        (article) => article.comments,
        {
          nullable: true
        }
    )
    article: ArticleEntity;

    @ManyToOne(
        type => UsersEntity, 
        (reviewer) => reviewer.commentsAsAny,
        {
            nullable: true
        }
    )
    reviewer: UsersEntity [];
}
