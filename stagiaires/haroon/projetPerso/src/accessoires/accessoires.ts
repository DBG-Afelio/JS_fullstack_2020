import { AccessoiresDto } from "./accessoiresDto";

export class Accessoires {
    constructor (public id  : number , public name : string ){

    }
    toDto() : AccessoiresDto {
        return   {
            id : this.id , 
            name :  this.name
        }
    }
    static fromBd(dtoResult:{id : number , name : string }) : Accessoires {
        return new Accessoires(dtoResult.id , dtoResult.name)
    }
}