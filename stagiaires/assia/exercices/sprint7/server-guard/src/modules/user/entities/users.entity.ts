import { Exclude } from 'class-transformer';
import { RolesEnum } from 'src/enum/roles.enum';
import { ArticleEntity } from 'src/modules/article/entities/article.entity';
import { CommentsEntity } from 'src/modules/comment/entities/comments.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
    unique: true,
  })
  googleId: string;

  @Column({
    nullable: true,
  })
  familyName: string;

  @Column({
    nullable: true,
  })
  firstName: string;

  @Column({
    nullable: true,
    length: 10,
  })
  login: string;

  @Exclude()
  @Column({
    nullable: true,
    //   length: 100,
  })
  _password: string;

  @Column({
    default: false,
  })
  isBlocked: boolean;

  @Column({
    type: 'enum',
    enum: RolesEnum,
    default: RolesEnum.READER,
  })
  role: RolesEnum;

  @OneToMany(
    type => ArticleEntity,
    article => article.author,
    {
      nullable: true,
    },
  )
  articlesAsAuthor: ArticleEntity[];

  @Column({
    nullable: true,
  })
  email: string;

  @OneToMany(
    type => CommentsEntity,
    comment => comment.reviewer,
  )
  commentsAsAny: CommentsEntity;

  @Column({
    default: false,
  })
  authorAccessRightsRequested: boolean;
}
