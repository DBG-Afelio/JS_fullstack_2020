import { OrderedItemModel } from "./OrderedItemModel";
import { ItemModel } from "./ItemModel";
export declare class ShoppingCart {
    private orderList;
    constructor(orderedList: OrderedItemModel[]);
    getOrderedItemList(): null | OrderedItemModel[];
    findIndexAndItem(searchedItem: ItemModel): undefined | {
        findOItem: OrderedItemModel;
        indexItem: number;
    };
}
