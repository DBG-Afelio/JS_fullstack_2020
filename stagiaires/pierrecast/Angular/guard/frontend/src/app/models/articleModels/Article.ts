import { Author } from '../authorModels/Author';
import { ArticleDto } from './ArticleDto';
import { SetArticleDto } from './SetArticleDto';

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

    public static fromDto(articleDto: ArticleDto): Article {
        return new Article(
            articleDto.id, 
            articleDto.title, 
            articleDto.content, 
            articleDto.date,  
            articleDto.published,
            articleDto.complete,
            Author.fromDto(articleDto.author),
        );
    }

    public toDto(): SetArticleDto {
        return {
           
            title: this.title,
            content: this.content,
            date: this.date,
            published: this.published,
            complete: this.complete,
            authorId: this.author.id,
        }
    }
}
