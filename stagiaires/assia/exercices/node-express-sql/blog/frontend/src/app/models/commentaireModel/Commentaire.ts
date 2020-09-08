import { CommentaireDto } from "../commentaireModel/CommentaireDto";

export class Commentaire {
    constructor(
        private id: number,
        private title: string,
        private content: string,
        private articleId: number,
        private familyName: string,
        private firstName: string,
        private date: Date
    ) {}

    // <<< from front
    public static fromDto(commentaireDto: CommentaireDto): Commentaire{
        return new Commentaire(
            commentaireDto.id,
            commentaireDto.titre,
            commentaireDto.contenu,
            commentaireDto.articles_id,
            commentaireDto.nom,
            commentaireDto.prenom,
            commentaireDto.date
        );
    }

    // >>> to front
    public toDto(): CommentaireDto{
        return {
            id: this.id,
            titre: this.title,
            contenu: this.content,
            articles_id: this.articleId,
            nom: this.familyName,
            prenom: this.firstName,
            date: this.date
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
    public getArticleId(): number{
        return this.articleId;
    }
    public getDate(): Date{
        return this.date;
    }
    public getFamilyName(): string{
        return this.familyName;
    }
    public getFirstName(): string{
        return this.firstName;
    }

    // setter

}