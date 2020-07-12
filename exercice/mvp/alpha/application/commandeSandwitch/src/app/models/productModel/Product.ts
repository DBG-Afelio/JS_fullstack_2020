import { ProductDto} from './ProductDto';
import { Option } from '../optionModel/Option';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public options: Option[],
        public supplierId: number,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.options = options;
        this.supplierId = supplierId;
    }

    public getId():number {
        return this.id;
    }

    public getName():string {
        return this.name;
    }

    public getDescription():string {
        return this.description;
    }

    public getPrice():number {
        return this.price;
    }

    public getOptions():Option[] {
        return this.options;
    }

    public getSupplierId():number {
        return this.supplierId;
    }

    public static fromDto(productDto: ProductDto): Product {
        return new Product(
            productDto.id, 
            productDto.nom, 
            productDto.description, 
            productDto.prix,
            productDto.options,
            productDto.fourn_id,
        );
    }

    public toDto(): ProductDto {
        return {
            id: this.id,
            nom: this.name,
            description: this.description, 
            prix: this.price,
            options: this.options,
            fourn_id: this.supplierId,
        }
    }
}
