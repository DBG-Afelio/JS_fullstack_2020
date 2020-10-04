import { StatusEnum } from 'src/app/enum/status.enum';
import { Tag } from '../Tag/Tag.model';
import { User } from '../User/User.model';
import { UserComment } from '../UserComment/userComment.model';
import { GetArticleDto } from './GetArticleDto';
import { SetArticleDto } from './SetArticleDto';
import { SetNewArticleDto } from './SetNewArticleDto';


export class Article {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public author: User,
    public publiDate: Date,
    public imageUrl: string,
    public status: StatusEnum,
    public comments: UserComment[],
    public tags: Tag[],
  ) {}

  public toDto(): SetArticleDto {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      publiDate: this.publiDate,
      imageUrl: this.imageUrl,
      status: this.status,
      tags: this.tags,
    };
  }

  public toNewDto(): SetNewArticleDto {
    return {
      title: this.title,
      content: this.content,
      author: this.author,
      imageUrl: this.imageUrl,
      status: this.status,
      tags: this.tags,
    };
  }

  public static fromDto(articleDto: GetArticleDto): Article {
    return new Article(
      articleDto.id,
      articleDto.title,
      articleDto.content,
      articleDto.author,
      articleDto.publiDate,
      articleDto.imageUrl,
      articleDto.status,
      articleDto.comments,
      articleDto.tags,
    );
  }
}