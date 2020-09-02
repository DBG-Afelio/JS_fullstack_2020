import { ArticleDto, ArticleDb } from "../dtos/ArticleListDto";

export class Article {
    constructor(
        private id: number,
        private title: string,
        private content: string,
        private authorId: number,
        private date: Date,
        private isPublished: boolean
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

    // <<<< from server db
    public static fromDb(articleDb: ArticleDb): Article{
        return new Article(
            articleDb.id,
            articleDb.titre,
            articleDb.contenu,
            articleDb.auteurs_id,
            articleDb.date,
            articleDb.publie
        );
    }
    // >>>> to server db
    public toDb(): ArticleDb{
        return {
            id: this.id,
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

}