import { tab_img } from './sourceJSON';
import { Shop } from './Shop';
import { Basket } from './Basket';
import { Article } from './Article';
import { Command } from './Command';

let shop = new Shop(tab_img);

let basket = new Basket();


let art2 = shop.getArticleById(2);
let art4 = shop.getArticleById(4);
let art5 = shop.getArticleById(5);

if (art2) {
    basket.updateBasket(art2, 3, 3);
    console.log('add', basket);
    basket.updateBasket(art2, 5, 3);
    console.log('update' ,basket);
    basket.updateBasket(art2, 0, 3);
    console.log('delete', basket);
}