export interface IArticle {
    titre: string;
    auteur: string;
    commentaire: string;
    pays: string;
    prix: number;
    image: {
        grande: string,
        moyenne: string,
        petite: string,
        toute_petite: string
    };
    id: number;
}
