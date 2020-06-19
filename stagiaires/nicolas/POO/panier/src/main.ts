//import { articles } from "./articles";
import { tab_img } from "./sourceJSON";
import { Article } from "./article";
import { Shop } from "./shop";
import { Basket } from "./basket";
import { OrderedArticle } from "./orderedArticle";

const newShop= new Shop(tab_img);
const newBasket = new Basket();
const article1 = newShop.getArticleById(2);
const article2 = newShop.getArticleById(5);
if(article1 && article2){

    newBasket.updateBasket(article1,5);
    newBasket.updateBasket(article2,5);


}



/*console.log(newBasket.updateBasket(newShop.getArticleById(4),2));*/

console.log(newBasket.getOrderedArticlesList());
console.log(newBasket.getTotal());
