export class DetailArticle{
    public titre : string;
    public prix : string;
    public img : string;
    public auteur : string;
    public pays : string;
    public com : string;
    public id : number=0;

    constructor(titre:string, prix:string, img:string, auteur:string, pays:string, com:string, id:number ){
        this.titre=titre;
        this.prix=prix;
        this.img=img;
        this.auteur=auteur,
        this.pays=pays,
        this.com=com,
        this.id=id;
    }
}