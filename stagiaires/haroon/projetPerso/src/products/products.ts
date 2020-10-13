import { ProductsDto } from "./productsDto";


export class  Products {
    constructor (public id  : number ,
        public price: number ,
        public name : string ,
        public description : string  ,
        public category_id : number
         ){

    }

       toDto() : ProductsDto {
           return {
               id : this.id ,
               price : this.price,
               name : this.name ,
               description :this.description ,
               category_id :this.category_id
               
           }
       }

       static fromBd(dtoResult:{id : number ,
        price : number ,
        name : string ,
        description : string ,
        category_id : number     }) : Products {
        return new Products(dtoResult.id , dtoResult.price , dtoResult.name , dtoResult.description , dtoResult.category_id)
    }
 
}