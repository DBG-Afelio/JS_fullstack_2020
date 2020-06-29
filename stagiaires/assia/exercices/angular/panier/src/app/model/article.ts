export class Article {
    private titre: string;
    private auteur: string;
    private commentaire: string;
    private pays: string;
    private prix: number;
    private image: any;
    private id: number;
    constructor(titre: string, auteur: string, commentaire: string, pays: string, prix: number, image: any, id: number) {
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
    getImage(): any {
        return this.image;
    }
    // type Image = { grande: string, moyenne: string, petite: string, toute_petite: string };

    getId(): number {
        return this.id;
    }
}
