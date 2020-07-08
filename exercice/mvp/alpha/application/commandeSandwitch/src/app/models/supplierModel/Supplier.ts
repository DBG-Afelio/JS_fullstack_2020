import { SupplierDto} from './SupplierDto';
import { ProductService } from 'src/app/services/productService/product.service';

export class Supplier {

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public closure: boolean,
        public archieved: boolean,
        public openings: boolean[],
        public phone: string,
        /*public listProducts: Product[],
        public productService: ProductService*/
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.closure = closure;
        this.archieved = archieved;
        this.openings = openings;
        this.phone = phone;
        /*this.listProducts = this.productService.getProductsFromSupplier(this.id);*/
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

    public isClose():boolean {
        return this.closure;
    }
    
    public isAchieved():boolean {
        return this.closure;
    }

    public getOpenings():boolean[] {
        return this.openings;
    }

    public getPhone():string {
        return this.description;
    }

    public static fromDto(supplierDto: SupplierDto): Supplier {
        return new Supplier(
            supplierDto.id, 
            supplierDto.nom, 
            supplierDto.description, 
            supplierDto.ferme,
            supplierDto.archive,
            supplierDto.horaire,
            supplierDto.tel,
        );
    }

    public toDto(): SupplierDto {
        return {
            id: this.id,
            nom: this.name,
            description: this.description, 
            ferme: this.closure,
            archive: this.archieved,
            horaire: this.openings,
            tel: this.phone,
        }
    }
}
