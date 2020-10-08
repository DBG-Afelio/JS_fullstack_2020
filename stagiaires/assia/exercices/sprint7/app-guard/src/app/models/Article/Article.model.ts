import { StatusEnum } from 'src/app/enum/status.enum';
import { Tag } from '../Tag/Tag.model';
import { TagDto } from '../Tag/TagDto';
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
    public comments?: UserComment[],
    public tags?: Tag[]
  ) {}

  public toDto(): SetArticleDto {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      imageUrl: this.imageUrl,
      status: this.status,
      tags: this.tags ? this.tags?.map((tag: Tag) => tag.id) : null,
    };
  }

  public toNewDto(): SetNewArticleDto {
    return {
      title: this.title,
      content: this.content,
      author: this.author.id,
      imageUrl: this.imageUrl,
      status: this.status,
      tags: this.tags ? this.tags?.map((tag: Tag) => tag.id) : null,
    };
  }

  public static fromDto(articleDto: GetArticleDto): Article {
    return new Article(
      articleDto.id,
      articleDto.title,
      articleDto.content,
      User.fromDto(articleDto.author),
      articleDto.publiDate,
      articleDto.imageUrl,
      articleDto.status,
      articleDto.comments, // << articleDto.comments.map((comDto: UserCommentDto) => UserComment.fromDto(comDto))
      articleDto.tags?.map((tagDto: TagDto) => Tag.fromDto(tagDto))
      // UserComment.fromDto(articleDto.comments),
    );
  }
}
