import { Article } from "./articles";

// 

export class Magasin{
    protected liste:Article[]=[]; 
    
    // liste est la key et articles[]=[] la value; donc on aurait pu appeler liste comme on veut en fait. la particularité de cette déclaration
    // c'est qu'on est dans du typescript on doit déclarer à quel type correspond cette propriété : et on dit qu'elle correspond à un tableau composé à partir de l'objet/class Article
    // ensuite le constructor permet de déclarer une fonction qui est propre à la classe magasin et qui prend comme paramètre un tableau
    // à chaque tour de boucle, on crée une nouvelle instance de la classe article, avec comme arguments les différentes propriétés qui nous intéressent, et qui 
    // correspond à la variable article
    // toujours dans le même tour, on push dans dans article chacune des propriétés passées en argument
    // plus bas, on ajoute la méthode getArticleById qui, comme on le déclare, s'applique à la classe articles et doit prendre comme paramètre une propriété nommée id qui doit 
    // être un chiffre
    constructor(tab:any[]){

        tab.forEach(element => {

            let article=new Article(element);
            this.liste.push(article);

        });
    }
    getArticleById(id:number):Article|undefined{ // méthode qui permet d'obtenir l'id sur d'un élément du tableau créé à l'aide du constructor qui lui-même instanciait à chaque
    // tour de boucle un nouvel article

        return this.liste.find(object=> id==object.id );

    }

    getListArticle():Article[]{ // méthode qui permet de rendre la liste en question
        return this.liste;
    }

}