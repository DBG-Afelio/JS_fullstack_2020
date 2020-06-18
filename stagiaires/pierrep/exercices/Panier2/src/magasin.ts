import { articles } from "./articles";

// la classe magasin crée un nouvel objet qui correspond à la classe article (?), quand je fais console.log(articles) il me dit [Function: articles] ce qui me laisse penser que 
// articles correspond à une fonction qui renvoie un tableau? est-ce que c'est correct ? 

// 

export class Magasin{
    protected liste:articles[]=[]; // ajout de protected pour préciser l'accès
    
    // liste est la key et articles[]=[] la value; donc on aurait pu appeler liste comme on veut en fait. la particularité de cette déclaration
    // c'est qu'on est dans du typescript on doit déclarer que articles correspond à un tableau ...? reposer la question
    // ensuite le constructor permet de déclarer une fonction qui est propre à la classe magasin et qui prend comme paramètre un tableau
    // à chaque tour de boucle, on crée une nouvelle instance de la classe article, avec comme arguments les différentes propriétés qui nous intéressent, et qui 
    // correspond à la variable article
    // toujours dans le même tour, on push dans dans article chacune des propriétés passées en argument
    // plus bas, on ajoute la méthode getArticleById qui, comme on le déclare, s'applique à la classe articles et doit prendre comme paramètre une propriété nommée id qui doit 
    // être un chiffre
    constructor(tab:any[]){

        tab.forEach(element => {

            let article=new articles(element.titre,element.Prix,element.image.toute_petite,element.id);
            this.liste.push(article);

        });
    }
    getArticleById(id:number):articles|undefined{

        return this.liste.find(object=> id==object.id );

    }

    getListArticle():articles[]{ 
        return this.liste;
    }

}