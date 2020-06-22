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

    constructor (id: number, titre: string){
        this.id = id;
        this.titre = titre;
    }

    public static fromJSON(imageJSON: ArticleDTO): Article{
        return new Article(
            imageJSON.id,
            imageJSON.titre
        );
    }
}

const art = Article.fromJSON(
    {
        titre : "L'Oeil du tig",
        id :2,
        image : {
            grande : "escalier_gd.jpg",
            moyenne : "escalier_pt.jpg",
            petite : "escalier_tpt.jpg",
            toute_petite : "escalier_ttpt.jpg"
        }
    }
);

// const art = new Article(0,'');
// art.fromJSON(
//     {
//         titre : "L'Oeil du tig",
//         id :2,
//         image : {
//             grande : "escalier_gd.jpg",
//             moyenne : "escalier_pt.jpg",
//             petite : "escalier_tpt.jpg",
//             toute_petite : "escalier_ttpt.jpg"
//         }
//     }
// )

// const art = new Article ({
//     titre : "L'Oeil du tig",
//     id :2,
//     image : {
//         grande : "escalier_gd.jpg",
//         moyenne : "escalier_pt.jpg",
//         petite : "escalier_tpt.jpg",
//         toute_petite : "escalier_ttpt.jpg"
//     }
// });

