import { StatusEnum } from "src/enum/status.enum";
import { CommentsEntity } from "src/modules/comment/entities/comments.entity";
import { TagsEntity } from "src/modules/tag/entities/tags.entity";
import { UsersEntity } from "src/modules/user/entities/users.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('articles')
export class ArticleEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToOne(
        type => UsersEntity,
        (user) => user.articlesAsAuthor,
        {
          nullable: false,
          cascade: ['insert', 'update'],
          eager: true,
        }
    )
    author: UsersEntity;

    @Column()
    publiDate: Date;

    @Column()
    imageUrl: string;

    @Column({
        type: 'enum', 
        enum: StatusEnum, 
        default: StatusEnum.TO_REVIEW
    })
    status: StatusEnum;
    
    @OneToMany(
        type => CommentsEntity, (comment) => comment.article,
        {
        nullable: true,
        cascade: ['insert', 'update'],
        eager: true,
    })
    comments: CommentsEntity [];

    @ManyToMany(
        type => TagsEntity, 
        (tag) => tag.articles,
        {
        nullable: true,
        cascade: ['insert', 'update'],
        eager: true,
    })
    @JoinTable()
    tags: TagsEntity[]

    }
