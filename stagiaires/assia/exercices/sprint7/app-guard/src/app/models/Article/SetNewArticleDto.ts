import { StatusEnum } from 'src/app/enum/status.enum';

export interface SetNewArticleDto {
  title: string;
  content: string;
  author: number;
  status: StatusEnum;
  imageUrl: string;
  tags?: number[];
}
