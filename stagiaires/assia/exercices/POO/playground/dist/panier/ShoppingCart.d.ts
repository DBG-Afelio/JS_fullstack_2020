import { OrderedItemModel } from "./OrderedItemModel";
import { ItemModel } from "./ItemModel";
export declare class ShoppingCart {
    private orderedList;
    constructor(orderedList: OrderedItemModel[]);
    getOrderedItemList(): null | OrderedItemModel[];
    findItem(searchedItem: ItemModel): undefined | OrderedItemModel;
    addItem(): void;
    removeItem(): void;
    deleteItem(): void;
    emptyCart(): void;
    setCartQuantity(): void;
    getCartQuantity(): number;
    setTotalPrice(): void;
    getTotalPrice(): number;
    displayCartQuantity(): void;
    displayCartPrice(): void;
}
