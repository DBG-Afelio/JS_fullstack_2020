import { OrderedItemModel } from "./OrderedItemModel";
import { ItemModel } from "./ItemModel";
export declare class OrderedItem implements OrderedItemModel {
    readonly item: ItemModel;
    quantity: number;
    constructor(item: ItemModel, qtty: number);
    getId(): number;
    getOrderedItem(): OrderedItemModel;
    getTotalPrice(): number;
    getQuantity(): number;
    setQuantity(qtty: number): OrderedItemModel;
}
