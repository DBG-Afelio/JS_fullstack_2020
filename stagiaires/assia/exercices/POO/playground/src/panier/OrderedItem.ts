import { OrderedItemModel } from "./OrderedItemModel"
import { ItemModel } from "./ItemModel";

export class OrderedItem implements OrderedItemModel {
    item: ItemModel
    quantity: number;
    totalPrice: number;

    constructor(item: ItemModel, qtty: number, ttPrice: number) {
        this.quantity = qtty;
        this.totalPrice = ttPrice;
    }

  

    getOrderedItemPrice() {
        
    }
    function setOrderedItemPrice() {
        
    }
    getOrderedItemQtty() {
        
    }
    function setOrderedItemQtty() {
        
    }

}