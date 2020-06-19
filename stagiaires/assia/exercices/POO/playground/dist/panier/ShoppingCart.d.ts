import { OrderedItemModel } from "./OrderedItemModel";
import { ItemModel } from "./ItemModel";
export declare class ShoppingCart {
    private orderList;
    constructor(orderedList: OrderedItemModel[]);
    getOrderedList(): null | OrderedItemModel[];
    findItemAndIndex(searchedItem: ItemModel): null | {
        findOItem: OrderedItemModel;
        index: number;
    };
    addItem(item: ItemModel, qtty: number): OrderedItemModel;
    updateItemQtty(item: OrderedItemModel, qtty: number): void;
    deleteItem(item: OrderedItemModel): void;
    private getItemIndex;
    emptyCart(): void;
    getTotal(): {
        qtty: number;
        price: number;
    };
}
