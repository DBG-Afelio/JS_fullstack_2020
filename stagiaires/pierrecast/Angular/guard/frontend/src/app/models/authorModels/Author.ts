import { AuthorDto } from './AuthorDto';
import { Article } from '../articleModels/Article';
import { User } from '../userModels/User';

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

    public getId(): number {
        return this.id;
    }

    public getFistname(): string {
        return this.familyname;
    }

    public getLastname(): string {
        return this.firstname;
    }

    public getEmail(): string {
        return this.email;
    }
    
    public getPresentation(): string {
        return this.presentation;
    } 
      
    public getUser(): User {
        return this.user;
    } 

    
     
    public isActive(): boolean {
        return this.active;
    } 

    public static fromDto(AuthorDto: AuthorDto): Author {
        return new Author(
            AuthorDto.id, 
            AuthorDto.familyname,
            AuthorDto.firstname, 
            AuthorDto.email,
            AuthorDto.presentation,
            AuthorDto.active,
            AuthorDto.user,
        );
    }

    public toDto(): AuthorDto {
        return {
            id: this.id,
            familyname: this.familyname,
            firstname: this.firstname,
            email: this.email,
            presentation: this.presentation,
            active: this.active,
            user: this.user,
        }
    }
}
