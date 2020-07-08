import { SupplierDto} from './SupplierDto';
import { Product } from '../productModel/Product';

export class Supplier {

    private listProducts: Product[];
    
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public closure: boolean,
        public archieved: boolean,
        public openings: boolean[],
        public phone: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.closure = closure;
        this.archieved = archieved;
        this.openings = openings;
        this.phone = phone;
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

    public setListProducts(listProducts: Product[]): void {
        this.listProducts = listProducts;
    }
}
