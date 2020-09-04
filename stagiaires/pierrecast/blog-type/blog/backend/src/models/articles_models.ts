
import { ArticleItemDto } from "../dtos/list_articles_dtos";

export class Article {
    constructor (
        public id: number,
        public titre: string,
        public contenu: string,
        public auteurId: number,
        public date: Date,
        public publie: boolean
    ) {

    }

   /* private _titre: string, */
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
            titre :this.titre,
            contenu: this.contenu,
            auteur_id: this.auteurId,
            date: this.date,
            publie: this.publie
        }
    }

    static fromDB(dbResult: {
        id: number;
        titre: string;
        contenu: string;
        auteur_id: number;
        date: Date;
        publie: boolean;
    }) {
        return new Article(
            dbResult.id,
            dbResult.titre,
            dbResult.contenu,
            dbResult.auteur_id,
            dbResult.date,
            dbResult.publie,
        );
    }
}
