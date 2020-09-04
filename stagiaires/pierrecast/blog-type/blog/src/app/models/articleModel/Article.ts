import { ArticleDto } from './ArticleDto';
import { Auteur } from '../auteurModel/Auteur';

export class Article {
    constructor(
        public id: number,
        public titre: string,
        public contenu: string,
        public auteur: Auteur,
        public date: Date,
        public publie: boolean
    ) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur;
        this.date = date;
        this.publie = publie;
    }

    public static fromDto(articleDto: ArticleDto, auteur: Auteur): Article {
        return new Article(
            articleDto.id,
            articleDto.titre,
            articleDto.contenu,
            auteur,
            articleDto.date,
            articleDto.publie,
        );
    }

    public toDto(): ArticleDto {
        return {
            id: this.id,
            titre: this.titre,
            contenu: this.contenu, 
            auteur_id: this.auteur.id,
            date: this.date,
            publie: this.publie
        }
    }
}
