import { OrderedItemModel } from "./OrderedItemModel";
import { ItemModel } from "./ItemModel";



export class ShoppingCart {
    private orderList: OrderedItemModel[] = [];

    constructor(orderedList: OrderedItemModel[]) {
        this.orderList = orderedList;
    }

    getOrderedItemList(): null | OrderedItemModel[] {
        return this.orderList;
    }

    findIndexAndItem(searchedItem: ItemModel): null | { findOItem: OrderedItemModel, index: number } {
        const index = this.orderList.findIndex(orderItem => {
            return orderItem.getId() === searchedItem.getId();
        });
        if (index !== -1) {
            return { findOItem: this.orderList[index], index };
        }
        return null;
    }
    
}