export interface ImageDTO {
    grande : string;
    moyenne : string;
    petite : string;
    toute_petite : string;
}


export interface ArticleDTO {
    titre: string;
    id: number;
    image : ImageDTO;
}

export class Article {
    id : number;
    titre: string;

    constructor (imageJSON: ArticleDTO){
        this.id = imageJSON.id;
        this.titre = imageJSON.titre;
    }
}


const art = new Article ({
    titre : "L'Oeil du tig",
    id :2,
    image : {
        grande : "escalier_gd.jpg",
        moyenne : "escalier_pt.jpg",
        petite : "escalier_tpt.jpg",
        toute_petite : "escalier_ttpt.jpg"
    }
});

