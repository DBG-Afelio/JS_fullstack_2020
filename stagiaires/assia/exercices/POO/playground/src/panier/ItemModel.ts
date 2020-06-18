import { ImageModel } from "./ImageModel";

export interface ItemModel {
    titre: string,
    auteur: string,
    commentaire: string,
    pays: string,
    prix: string,
    image: ImageModel,
    id: number
}