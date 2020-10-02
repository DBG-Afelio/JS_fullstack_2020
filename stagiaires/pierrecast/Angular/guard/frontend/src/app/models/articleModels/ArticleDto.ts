import { Author } from '../authorModels/Author';

export interface ArticleDto {
    id: number;
    title: string;
    content: string;
    date: Date;
    published: boolean;
    complete: boolean;
    author: Author;
}
