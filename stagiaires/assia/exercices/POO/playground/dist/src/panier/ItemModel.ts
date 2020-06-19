import { ImageModel } from "./ImageModel";
export interface ItemModel {
    readonly titre: string,
    readonly auteur: string,
    readonly commentaire: string,
    readonly pays: string,
    readonly prix: number,
    readonly image: ImageModel,
    readonly id: number,

    getId(): number,
    getItem():ItemModel,
}