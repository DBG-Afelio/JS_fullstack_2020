import { ProductDto} from './ProductDto';
import { Supplier } from '../supplierModel/Supplier';
import { Option } from '../OptionModel/Option';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public options: Option[],
        public supplier: Supplier,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.options = options;
        this.supplier = supplier;
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

    public getSupplier():Supplier {
        return this.supplier;
    }


    public static fromDto(productDto: ProductDto): Product {
        return new Product(
            productDto.id, 
            productDto.name, 
            productDto.description, 
            productDto.price,
            productDto.options,
            productDto.supplier,
        );
    }

    public toDto(): ProductDto {
        return {
            id: this.id,
            name: this.name,
            description: this.description, 
            price: this.price,
            options: this.options,
            supplier: this.supplier,
        }
    }
}
