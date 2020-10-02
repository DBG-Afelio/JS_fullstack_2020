import { AuthorDto } from './AuthorDto';
import { Article } from '../articleModels/Article';
import { User } from '../userModels/User';

export class Author {    
    
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public email: string,
        public presentation: string, 
        public active: boolean,
        public user: User,
        public articles: Article[],
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.presentation = presentation;
        this.active = active;
        this.user = user;
        this.articles = articles; 
    }

    public getId(): number {
        return this.id;
    }

    public getFistname(): string {
        return this.firstname;
    }

    public getLastname(): string {
        return this.lastname;
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

    public getArticles(): Article[] {
        return this.articles;
    } 
     
    public isActive(): boolean {
        return this.active;
    } 

    public static fromDto(AuthorDto: AuthorDto): Author {
        return new Author(
            AuthorDto.id, 
            AuthorDto.firstname,
            AuthorDto.lastname, 
            AuthorDto.email,
            AuthorDto.presentation,
            AuthorDto.active,
            AuthorDto.user,
            AuthorDto.articles.map(article => Article.fromDto(article)),

        );
    }

    public toDto(): AuthorDto {
        return {
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            presentation: this.presentation,
            active: this.active,
            user: this.user,
            articles: this.articles.map(article => article.toDto()),
        }
    }
}
