import { StatusEnum } from 'src/app/enum/status.enum';
import { Tag } from '../Tag/Tag.model';
import { User } from '../User/User.model';
import { UserComment } from '../UserComment/userComment.model';

export interface GetArticleDto {
  id: number;
  title: string;
  content: string;
  author: User;
  publiDate: Date;
  imageUrl: string;
  status: StatusEnum;
  comments: UserComment[];
  tags: Tag[];
}