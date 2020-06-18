import { ItemModel } from "./ItemModel";


export interface OrderedItemModel {
    readonly item: ItemModel,
    quantity: number,

    getOrderedItem():OrderedItemModel;
    getId(): number;
    getTotalPrice(): number,
    getQuantity(): number,
    setQuantity(quantity: number): void,

}