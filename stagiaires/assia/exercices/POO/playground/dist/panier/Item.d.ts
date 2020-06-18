import { ItemModel } from "./ItemModel";
import { ImageModel } from "./ImageModel";
export declare class Item implements ItemModel {
    readonly titre: string;
    readonly auteur: string;
    readonly commentaire: string;
    readonly pays: string;
    readonly prix: number;
    readonly image: ImageModel;
    readonly id: number;
    constructor(title: string, autor: string, comments: string, country: string, price: number, picture: ImageModel, id: number);
    getId(): number;
    getItem(): ItemModel;
}
