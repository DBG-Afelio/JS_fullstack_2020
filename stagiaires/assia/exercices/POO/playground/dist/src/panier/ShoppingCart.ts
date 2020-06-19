import { OrderedItemModel } from "./OrderedItemModel";
import { ItemModel } from "./ItemModel";
import { OrderedItem } from "./OrderedItem";



export class ShoppingCart {
    private orderList: OrderedItemModel[] = [];

    constructor(orderedList: OrderedItemModel[]) {
        this.orderList = orderedList;
    }

    public getOrderedList(): null | OrderedItemModel[] {
        return this.orderList;
    }

    public findItemAndIndex(searchedItem: ItemModel): null | { findOItem: OrderedItemModel, index: number } {
        const index = this.orderList.findIndex(orderItem => orderItem.getId() === searchedItem.getId());
        if (index !== -1) {
            return { findOItem: this.orderList[index], index };
        }
        return null;
    }
    
    public addItem(item:ItemModel, qtty:number):OrderedItemModel {
        return new OrderedItem(item, qtty);
    }
    
    public updateItemQtty(item: OrderedItemModel, qtty: number): void {
        const updatedItem:OrderedItemModel = item.setQuantity(qtty);
        this.orderList.splice(this.getItemIndex(item), 1, updatedItem);
    }

    public deleteItem(item: OrderedItemModel): void {
        this.orderList.splice(this.getItemIndex(item), 1);
    }

    private getItemIndex(targetItem: OrderedItemModel): number{
        return this.orderList.findIndex(currItem => currItem === targetItem);
    }

    public emptyCart(): void {
        this.orderList = [];
    }

    public getTotal(): { qtty: number, price: number } {
        let total = { qtty: 0, price: 0 };
        this.orderList.forEach(orderItem => {
            total.qtty += orderItem.getQuantity();
            total.price += orderItem.getQuantity() * orderItem.item.prix;
        });
        return total;
    }

}