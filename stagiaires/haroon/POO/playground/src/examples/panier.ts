export abstract class panier {
    private image = string ; 
    private price = string ; 
    private author  = string ; 
    private country = string  ; 
    private title = string ; 
    private comment = string ; 

    constructor (image :string ,
         price : string ,
          author :string ,
          conutry : string ,
          title : string ,
          comment :string  ){
              this.image = image ;
              this.price = price ;
              this.author= author ;
              this.country = conutry ;
              this.title = title;
              this.comment = comment ;

          }
    
}