import { TimeStampEntity } from "src/timestamp/timestamp.entity";
import { UserEntity } from "src/users/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('article')
export class ArticlesEntity extends TimeStampEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "title"
    })
    title: string;

    @Column({ name: 'content'})
    content: string;

    @ManyToOne(
        type => UserEntity,
        (user) => user.articles, 
        {
            cascade: ['insert', 'update'],
            nullable: true,
            eager: true
        }
    )
    user: UserEntity;

}