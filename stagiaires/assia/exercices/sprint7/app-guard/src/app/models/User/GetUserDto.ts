import { RolesEnum } from 'src/app/enum/roles.enum';
import { Article } from '../Article/Article.model';
import { UserComment } from '../UserComment/userComment.model';

export interface GetUserDto {
    id: number;
    familyName: string;
    firstName: string;
    login: string;
    _password: string;
    isBlocked: boolean;
    role: RolesEnum;
    articlesAsAuthor: Article[];
    email: string;
    commentsAsAny: UserComment[];
    authorAccessRightsRequested: boolean;
}
