import { OrderedItemModel } from "./OrderedItemModel";
import { ItemModel } from "./ItemModel";
export declare class ShoppingCart {
    private orderList;
    constructor(orderedList: OrderedItemModel[]);
    getOrderedItemList(): null | OrderedItemModel[];
    findIndexAndItem(searchedItem: ItemModel): undefined | {
        OrderedItemModel: any;
        number: any;
    };
    addItem(item: ItemModel, qtty: number): OrderedItemModel;
    removeItem(item: OrderedItemModel): void;
    deleteItem(): void;
    emptyCart(): void;
    setCartQuantity(): void;
    getCartQuantity(): number;
    setTotalPrice(): void;
    getTotalPrice(): number;
    displayCartQuantity(): void;
    displayCartPrice(): void;
}
