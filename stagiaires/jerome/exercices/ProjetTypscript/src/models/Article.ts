import { AuteurArticle } from './AuteurArticle';
import { ArticleItemDto } from '../dtos/list-articles-dto';

export class Article{
    constructor(
        public id:number,
        private _titre:string,
        public contenu:string,
        public date:Date,
        public publie:boolean,
        public auteur: AuteurArticle
    ){}

    
    public get titre() : string {
        return this._titre;
    }

    
    public set titre(v : string) {
        if (!/^[a-z]$/i.test(v)) {
            throw new Error('format invalide');
        }
        this._titre= v;
    }
    
    public toArticleItemDto(): ArticleItemDto{
        return {
            id: this.id,
            autorId: this.auteur.id,
            title : this._titre
        }
    }
    
}