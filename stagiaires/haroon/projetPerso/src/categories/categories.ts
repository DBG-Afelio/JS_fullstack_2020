import { CategoriesDto } from "./categoriesDto";

export class Categories {
    constructor( public  id : number , public name : string ){  
    }
    toDto(): CategoriesDto {
        return {
            id : this.id,
            name : this.name ,
            
        }
    }
    static fromBd(dtoResult : { id : number , name : string}) : Categories {
        return new Categories(dtoResult.id , dtoResult.name);
    }
}