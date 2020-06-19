

import { AvailableItems } from './panier/AvailableItems'
import { ItemModel } from './panier/ItemModel';
import { Stock } from './panier/Stock';

console.log("Exercice Panier");


function afficheListDispo(stock:ItemModel[]): void{
    console.log(stock);  
}


const myStock = new Stock(AvailableItems);
afficheListDispo(myStock);