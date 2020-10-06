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
    ) {
        this.id = id;
        this.familyname = familyname;
        this.firstname = firstname;
        this.email = email;
        this.presentation = presentation;
        this.active = active;
        this.user = user;
    }

    public static fromDto(AuthorDto: AuthorDto): Author {
        return new Author(
            AuthorDto.id, 
            AuthorDto.familyname,
            AuthorDto.firstname, 
            AuthorDto.email,
            AuthorDto.presentation,
            AuthorDto.active,
            User.fromDto(AuthorDto.user),
        );
    }

    /*public toDto(): AuthorDto {
        return {
            id: this.id,
            familyname: this.familyname,
            firstname: this.firstname,
            email: this.email,
            presentation: this.presentation,
            active: this.active,
            user: this.user,
        }
    }*/

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
