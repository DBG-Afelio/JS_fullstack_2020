//import { articles } from "./articles";
import { tab_img } from "./sourceJSON";
import { Article } from "./articles";
import { Magasin } from "./magasin";
import { OrderedArticle } from "./oderedArticle";
import { AffichageArticle } from "./affichageDetailArticle"
import { Panier } from "./panier";

let magasin=new Magasin(tab_img);
let affichageArticle=new AffichageArticle(tab_img);
let panier = new Panier();
let article = magasin.getArticleById(8);


let detailarticle = affichageArticle.getDetailArticleById(2);
//console.log(article);
console.log(article);

if (article){
    let orderArticle = new OrderedArticle(article, 4);
    //console.log(orderArticle.getTotalPrice());
    panier.updatePanier(article, 3);
    panier.updatePanier(article, 7);
    panier.updatePanier(article, 0);
    console.log(panier);
}
