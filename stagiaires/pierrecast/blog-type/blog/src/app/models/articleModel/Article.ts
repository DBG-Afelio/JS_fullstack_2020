import { ArticleDto } from './ArticleDto';

export class Article {
    constructor(
        public id: number,
        public titre: string,
        public contenu: string,
        public auteur_id: number,
        public date: Date,
        public publie: boolean
    ) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.auteur_id = auteur_id;
        this.date = date;
        this.publie = publie;
    }

    public static fromDto(articleDto: ArticleDto): Article {
        return new Article(
            articleDto.id,
            articleDto.titre,
            articleDto.contenu,
            articleDto.auteur_id,
            articleDto.date,
            articleDto.publie,
        );
    }

    public toDto(): ArticleDto {
        return {
            id: this.id,
            titre: this.titre,
            contenu: this.contenu, 
            auteur_id: this.auteur_id,
            date: this.date,
            publie: this.publie
        }
    }
}
