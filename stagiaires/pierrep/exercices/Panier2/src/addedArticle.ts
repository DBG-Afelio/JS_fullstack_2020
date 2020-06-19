// Cette partie du code fait partie du model et doit permettre d'instancier dans le main.ts une classe sur laquelle on peut opérer les méthodes qui permettent de sélectionner ?
// de "gérer" l'encodage d'un point de vue data de l'article sélectionné ? de quoi avons nous besoin pour ça en termes de propriétés ? de récupérer l'article, sa quantité et son prix

import { articles } from "./articles";

export class addeddArticle{
    protected article: articles;
    protected prix: number;
    protected quantity: number;

    constructor(article:articles, quantity:number){
        this.article = article;
        this.quantity = quantity;
        this.prix = article.getPrice();
    }

    
}