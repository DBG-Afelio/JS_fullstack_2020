export class Article {
    private id: number;
    private titre: string;
    private auteur: string
    private commentaire: string;
    private pays: string;
    private prix: string;
    private image: Image;
    
    constructor(id: number, titre: string,  auteur: string, commentaire: string, pays: string, prix: string, image: Image ){
        this.id = id;
        this.titre = titre;
        this.auteur = auteur;
        this.commentaire = commentaire;;
        this.pays = pays;
        this.prix = prix;
        this.image = image;
    } 
}

type Image = { petite: string; moyenne: string, grande: string; toute_petite: string };
