import { ProductDto } from './product-dto';
import { OrderOption } from './order-option';
import { Provider } from './provider';

export class Product {

    provider:Provider;

    constructor(public name:string,
                public description:string,
                public price:number,
                public options:OrderOption[],
                public providerId:number,
                public id:number ){}

    static fromDto(productDto:ProductDto){

    return new Product(

            productDto.nom,
            productDto.description,
            productDto.prix,
            productDto.options,
            productDto.fourn_id,
            productDto.id

        )

    }
    toDto():ProductDto{

        return {

            "nom": this.name,
            "description": this.description,
            "prix": this.price,
            "options": this.options,
            "fourn_id": this.provider.id,
            "id": this.id

        }

    }
    setProvider(provider:Provider){

        this.provider = provider

    }
}
