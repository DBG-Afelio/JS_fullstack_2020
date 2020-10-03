import { RolesEnum } from 'src/app/enum/roles.enum';
import { Article } from '../Article/Article.model';
import { UserComment } from '../UserComment/userComment.model';
import { GetUserDto } from './GetUserDto';
import { SetUserDto } from './SetUserDto';

export class User {
    constructor(
        public id: number,
        public login: string,
        public password: string,
        public familyName?: string,
        public firstName?: string,
        public isBlocked?: boolean,
        public role?: RolesEnum,
        public email?: string,
        public authorAccessRightsRequested?: boolean,
        public commentsAsAny?: UserComment[],
        public articlesAsAuthor?: Article[],
 
    ){}

    public toDto(): SetUserDto {
        return {
          familyName: this.familyName,
          firstName: this.firstName,
          login: this.login,
          _password: this.password,
          isBlocked: this.isBlocked,
          role: this.role,
          email: this.email,
          authorAccessRightsRequested: this.authorAccessRightsRequested,
        }   
    }

    public static fromDto(userDto: GetUserDto): User {
        return new User(
            userDto.id,
            userDto.login,
            userDto._password,
            userDto.familyName,
            userDto.firstName,
            userDto.isBlocked,
            userDto.role,
            userDto.email,
            userDto.authorAccessRightsRequested,
            userDto.commentsAsAny,
            userDto.articlesAsAuthor,
        )
    }

    
}