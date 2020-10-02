import { Author } from '../authorModels/Author';
import { ArticleDto } from './ArticleDto';


export class Article {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public date: Date,
        public published: boolean,
        public complete: boolean, 
        public author: Author,
    ) { }

    public getId():number {
        return this.id;
    }

    public getTitle():string {
        return this.title;
    }

    public getContent():string {
        return this.content;
    }

    public getDate():Date {
        return this.date;
    }

    public getPublished():boolean {
        return this.published;
    }

    public isComplete(): boolean {
        return this.complete;
    }

    public getAuthor():Author {
        return this.author;
    }

    public static fromDto(articleDto: ArticleDto): Article {
        return new Article(
            articleDto.id, 
            articleDto.title, 
            articleDto.content, 
            articleDto.date,  
            articleDto.published,
            articleDto.complete,
            articleDto.author,
        );
    }

    public toDto(): ArticleDto {
        return {
            id: this.id,
            title: this.title,
            content: this.content,
            date: this.date,
            published: this.published,
            complete: this.complete,
            author: this.author,
        }
    }
}
