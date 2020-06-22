export class Article{
    public titre : string;
    public prix : number;
    public img : string;
    public id : number=0;

    constructor(titre:string, prix:string, img:string,id:number ){
        this.titre=titre;
        this.prix=parseFloat(prix);
        this.img=img;
        this.id=id;
    }

    getPrix(): number{
        return this.prix;
    }

}