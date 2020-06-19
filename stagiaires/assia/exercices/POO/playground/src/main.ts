

import { AvailableItems } from './panier/AvailableItems'
import { ItemModel } from './panier/ItemModel';
import { Stock } from './panier/Stock';
import { ShoppingCart } from './panier/ShoppingCart';
import { OrderedItemModel } from './panier/OrderedItemModel';

function afficheMonStock(stock: Stock): void{
    if (stock) {
        console.log("mon stock", stock.getList());
    } else {
        console.log("mons stock est vide");
    }
}

function afficheMonPanier(panier: ShoppingCart): void{
    console.log("mon panier", panier);
}


const myStock = new Stock([]);
//afficheMonStock(myStock);

// const maListdeCommandes: OrderedItemModel[] = [{ item: myStock.getItemById(6), quantity: 20 }, item: myStock.getItemById(10), quantity: 8}, item: myStock.getItemById(8), quantity: 11}];
// const myCart = new ShoppingCart(maListdeCommandes);
// afficheMonPanier(myCart);

function afficheItembyId(stock:Stock, id: number) {
    if (stock.getList.length > 0) {
        if (stock.getItemById(id)) {
            console.log(stock.getItemById(id))
        } else {
            console.log("ID item introuvable dans le stock");
        }
    } else {
        console.log('le Stock est vide');
    }
}

afficheItembyId(myStock, 10);
