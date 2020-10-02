import { ArticleDto } from '../articleModels/ArticleDto';
import { User } from '../userModels/User';

export interface AuthorDto {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    presentation: string;
    active: boolean;
    user: User;
    articles: ArticleDto[]; 
}
