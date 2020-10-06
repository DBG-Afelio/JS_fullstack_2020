import { User } from '../userModels/User';
import { AuthorDto } from './AuthorDto';
import { SetAuthorDto } from './SetAuthorDto';

export class Author {    
    
    constructor(
        public id: number,
        public familyname: string,
        public firstname: string,
        public email: string,
        public presentation: string, 
        public active: boolean,
        public user: User,
    ) { }

    public static fromDto(authorDto: AuthorDto): Author {
        return new Author(
            authorDto.id, 
            authorDto.familyname,
            authorDto.firstname, 
            authorDto.email,
            authorDto.presentation,
            authorDto.active,
            User.fromDto(authorDto.user),
        );
    }

    public toSetDto(): SetAuthorDto {
        return {
            familyname: this.familyname,
            firstname: this.firstname,
            email: this.email,
            presentation: this.presentation,
            active: this.active,
            userId: this.user.id,
        }
    }
}
