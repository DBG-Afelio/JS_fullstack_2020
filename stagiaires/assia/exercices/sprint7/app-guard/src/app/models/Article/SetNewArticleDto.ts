import { StatusEnum } from 'src/app/enum/status.enum';
import { Tag } from '../Tag/Tag.model';
import { User } from '../User/User.model';

export interface SetNewArticleDto {
  title: string;
  content: string;
  author: User;
  status: StatusEnum;
  imageUrl: string;
  tags: Tag[];
}