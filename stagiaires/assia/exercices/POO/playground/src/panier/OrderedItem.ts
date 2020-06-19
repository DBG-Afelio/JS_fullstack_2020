import { OrderedItemModel } from "./OrderedItemModel"
import { ItemModel } from "./ItemModel";

export class OrderedItem implements OrderedItemModel {
    public readonly item: ItemModel;
    public quantity: number = 0;
 
    constructor(item: ItemModel, qtty: number) {
        this.item = item;
        this.quantity = qtty;
    }
    public getId(): number{
        return this.item.getId();
    }
    public getOrderedItem(): OrderedItemModel{
        return this;
    }
    public getTotalPrice(): number{
        return this.item.prix * this.quantity;
    } 
    public getQuantity(): number{
        return this.quantity;
    }
    public setQuantity(qtty:number): OrderedItemModel{
        this.quantity = qtty;
        return this;
    }   
}