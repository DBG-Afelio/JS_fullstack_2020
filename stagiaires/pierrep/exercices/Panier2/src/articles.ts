// on définit ici une classe nommée articles qui prend en propriétés les différentes propriétés des objets à acheter qui nous intéressent


export class articles{
    public titre : string;
    public prix : number;
    public img : string;
    public id : number=0; // pourquoi ajoute-t-on =0 ?

    constructor(titre:string, prix:string, img:string,id:number ){
        this.titre=titre;
        this.prix = parseFloat(prix);
        this.img=img;
        this.id=id;
    }

    getTitle() : string{ // à quoi servent ces get ? => get = syntaxe qui permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on accédera à la propriété
    // donc en fait ça sert simplement à articles.Title() et à afficher ainsi le titre d'un article en q. ? 
        return this.titre;
    }

    getPrice() : number{
        return this.prix;
    }

    getImg() : string{
        return this.img;
    }

    getId() : number{
        return this.id;
    }

}