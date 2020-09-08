import { ArticleDto, CreateArticleDto } from "../articleModel/ArticleDto";

export class Article {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public authorId: number,
        public date: Date,
        public isPublished: boolean
    ) {}

    // <<< from front
    public static fromDto(articleDto: ArticleDto): Article{
        return new Article(
            articleDto.id,
            articleDto.titre,
            articleDto.contenu,
            articleDto.auteurs_id,
            articleDto.date,
            articleDto.publie
        );
    }

    // >>> to front
    public toDto(): ArticleDto{
        return {
            id: this.id,
            titre: this.title,
            contenu: this.content,
            auteurs_id: this.authorId,
            date: this.date,
            publie: this.isPublished
        }
    }

    public toDtoCrea(): CreateArticleDto{
        return {
            titre: this.title,
            contenu: this.content,
            auteurs_id: this.authorId,
            date: this.date,
            publie: this.isPublished
        }
    }

    // getter
    public getId(): number{
        return this.id;
    }
    public getTitle(): string{
        return this.title;
    }
    public getContent(): string{
        return this.content;
    }
    public getAuthorId(): number{
        return this.authorId;
    }
    public getDate(): Date{
        return this.date;
    }
    public getIsPublished(): boolean{
        return this.isPublished;
    }

    // setter
    public setTitle(title: string): void{
        this.title = title;
    }
    public setContent(content: string): void{
        this.content = content;
    }
    public setAuthorId(authorId: number): void{
        this.authorId = authorId;
    }
    public setDate(): void{
        this.date = new Date();
    }
    public setIsPublished(isPublished: boolean): void{
        this.isPublished = isPublished;
    }
}