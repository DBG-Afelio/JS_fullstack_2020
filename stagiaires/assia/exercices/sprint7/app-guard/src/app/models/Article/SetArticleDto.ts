import { StatusEnum } from 'src/app/enum/status.enum';
import { Tag } from '../Tag/Tag.model';

export interface SetArticleDto {
  id: number;
  title: string;
  content: string;
  publiDate: Date;
  status: StatusEnum;
  imageUrl: string;
  tags: Tag[];
}