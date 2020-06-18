import { ItemModel } from "./ItemModel";
import { ImageModel } from "./ImageModel";

export class Item implements ItemModel{
    public readonly titre: string ='itemTitle';
    public readonly auteur: string = 'itemAutor';
    public readonly commentaire: string = 'itemComments';
    public readonly pays: string = 'itemOrigins';
    public readonly prix: number = 0;
    public readonly image: ImageModel;
    public readonly id: number = 0;

    constructor(
        title: string,
        autor: string,
        comments: string,
        country: string,
        price: number,
        picture: ImageModel,
        id: number) {
    
        this.titre = title;
        this.auteur = autor;
        this.commentaire = comments;
        this.pays = country;
        this.prix = price;
        this.image = picture;
        this.id = id;
    }

    public getId(): number{
        return this.id;
    }
    
    public getItem(): ItemModel{
        this;
    }
}