import { AuthorDto } from '../authorModels/AuthorDto';

export interface ArticleDto {
    id: number;
    title: string;
    content: string;
    date: Date;
    published: boolean;
    complete: boolean;
    author: AuthorDto;
}
