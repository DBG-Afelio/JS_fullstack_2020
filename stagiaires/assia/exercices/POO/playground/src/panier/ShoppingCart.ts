import { OrderedItemModel } from "./OrderedItemModel";
import { ItemModel } from "./ItemModel";
import { OrderedItem } from "./OrderedItem";


export class ShoppingCart {
    private orderList: OrderedItemModel[] = [];

    constructor(orderedList:OrderedItemModel[]) {
        this.orderList = orderedList;
    }

    getOrderedItemList(): null | OrderedItemModel[] {
        return this.orderList;
    }

    findIndexAndItem(searchedItem: ItemModel): undefined | { OrderedItemModel, number } {
        this.orderList.find(orderItem, i => {
            if (orderItem.getId() === searchedItem.getId()) {
                const index = i;
                const findOItem = orderItem;
            }
        }
        return { findOItem, index };
    }
    
    // ajouter un article avec 
    addItem(item:ItemModel, qtty:number):OrderedItemModel {
        return new OrderedItem(item, qtty);
    }
    //retirer un article, devra renvoyer false si l'item que l'on essaye de supprimer n'existe pas;
    removeItem(item:OrderedItemModel): void {
        this.orderList.splice()
    }

    //supprimer tout l'article du panier
    deleteItem() {
        
    }

    //vider le panier total
    emptyCart() {
        
    }

    
    //calculer le nombre d'articles dns le panier
    setCartQuantity():void {
        
    }

    //connaître le nombre d'articles avec 
    getCartQuantity():number {
        return 0;
    }

    //calculer le prix total du panier avec 
    setTotalPrice():void {
    }

    //connaitre le prix total du panier avec 
    getTotalPrice(): number {
        return 0;
    }

    displayCartQuantity(): void {
    }

    displayCartPrice(): void {

    }


}