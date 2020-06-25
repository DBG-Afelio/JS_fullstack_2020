export class Product{
   public title : string;
   public price : number;
   public image : {petite: string, moyenne: string, grande: string, toute_petite: string}
   public id : number=0;
   public comment: string;
   public country: string;
   public author : string;

   constructor(element: any){
       this.title = element.titre;
       this.price = parseFloat(element.Prix);
       this.image = element.image;
       this.id = element.id;
       this.comment = element.commentaire;
       this.country = element.Pays;
       this.author = element.auteur;
   }


}