
import { IArticleImages } from '../interfaces/iarticle-images';

export class Article {
    private titre: string;
    private auteur: string;
    private commentaire: string;
    private pays: string;
    private prix: number;
    private image: IArticleImages;
    private id: number;
    constructor(titre: string, auteur: string, commentaire: string, pays: string, prix: number, image: IArticleImages, id: number) {
        this.titre = titre;
        this.auteur = auteur;
        this.commentaire = commentaire;
        this.pays = pays;
        this.prix = prix;
        this.image = image;
        this.id = id;
    }

    getTitre(): string {
        return this.titre;
    }
    getAuteur(): string {
        return this.auteur;
    }
    getComments(): string {
        return this.commentaire;
    }
    getPays(): string {
        return this.pays;
    }
    getPrix(): number {
        return this.prix;
    }
    getImage(): IArticleImages {
        return this.image;
    }
    getId(): number {
        return this.id;
    }
}
