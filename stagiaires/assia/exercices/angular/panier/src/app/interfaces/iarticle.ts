import { IArticleImages } from './iarticle-images';

export interface IArticle {
    titre: string;
    auteur: string;
    commentaire: string;
    pays: string;
    prix: number;
    image: IArticleImages;
    id: number;
    // getId(): number;
    // getTitre(): string;
    // getAuteur(): string;
    // getComments(): string;
    // getPays(): string;
    // getPrix(): number;
    // getImage(): IArticleImages;
}
