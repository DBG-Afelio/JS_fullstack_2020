// on définit ici une classe nommée articles qui prend en propriétés les différentes propriétés des objets à acheter qui nous intéressent


export class Article{
    public titre : string;
    public prix : number;
    public img : {toute_petite:string; petite:string,moyenne:string,grande:string};
    public id : number; 

    constructor(article:any){
        this.titre=article.titre;
        this.prix = parseFloat(article.Prix);
        this.img=article.image;
        this.id=article.id; 
    }

    getTitle() : string{ // à quoi servent ces get ? => get = syntaxe qui permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on accédera à la propriété
    // donc en fait ça sert simplement à articles.Title() et à afficher ainsi le titre d'un article en q. ? 
        return this.titre;
    }

    getPrice() : number{
        return this.prix;
    }

    getImg() : {}{
        return this.img;
    }

    getId() : number{
        return this.id;
    }

}