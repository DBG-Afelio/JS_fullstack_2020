
import { ArticleItemDto } from "../dtos/list_articles_dtos";

export class Article {
    constructor (
        public id: number,
        /* private _titre: string, */
        public titre: string,
        public contenu: string,
        public auteurId: number,
        public date: Date,
        public publie: boolean
    ) {

    }

   /* public get titre(): string {
        return this._titre;
    }

    public set titre(v : string) {
        if (!/^[a-z]$/i.test(v)) {
            throw new Error('format invalide');
        }
        this._titre = v;
    }*/

    public toArticleItemDto(): ArticleItemDto {
        return {
            id: this.id,
            auteur_id: this.auteurId,
            titre :this.titre,
            contenu: this.contenu,
            date: this.date,
            publie: this.publie
        }
    }

    static fromDB(dbResult: {
        id: number;
        titre: string;
        contenu: string;
        auteurId: number;
        date: Date;
        publie: boolean;
    }) {
        return new Article(
            dbResult.id,
            dbResult.titre,
            dbResult.contenu,
            dbResult.auteurId,
            dbResult.date,
            dbResult.publie,
        );
    }
}
