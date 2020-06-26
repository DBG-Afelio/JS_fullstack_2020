import { IArticle } from './iarticle';

export interface IArticleCommande {
    article: IArticle;
    quantite: number;
    getArticleCom(): IArticleCommande;
    getId(): number;
    getPrixTotal(): number;
    getQtte(): number;
    setQtte(quantity: number): void;
}
