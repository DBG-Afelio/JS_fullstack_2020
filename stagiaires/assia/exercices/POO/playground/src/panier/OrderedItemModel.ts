import { ItemModel } from "./ItemModel";


export interface OrderedItemModel {
    item: ItemModel,
    quantity: number,
    totalPrice: number,
    
}