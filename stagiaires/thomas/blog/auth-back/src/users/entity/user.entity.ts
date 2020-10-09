import { ArticlesEntity } from "src/articles/article.entity";
import { UserRoleEnum } from "src/enums/user-role.enum";
import { TimeStampEntity } from "src/timestamp/timestamp.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class UserEntity extends TimeStampEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
        unique: true,
        name: 'username'
    })
    username: string;

    @Column({
        unique: true,
        name: 'email' 
    })
    email: string;

    @Column()
    password: string;
    
    @Column()
    salt: string;

    @Column({
        type: 'enum',
        enum: UserRoleEnum,
        default: UserRoleEnum.USER
    })
    role: string;

    @OneToMany(
        type => ArticlesEntity,
        (article) => article.user,
        {
            nullable: true,
            cascade: true
        } 
    )
    articles: ArticlesEntity[]
}