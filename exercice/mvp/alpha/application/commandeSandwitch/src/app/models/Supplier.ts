import { SupplierDto} from './SupplierDto';

export class Supplier {

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public closure: boolean,
        public archieved: boolean,
        public openings: boolean[],
        public phone: string,
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
            supplierDto.name, 
            supplierDto.description, 
            supplierDto.closure,
            supplierDto.archieved,
            supplierDto.openings,
            supplierDto.phone,
        );
    }

    public toDto(): SupplierDto {
        return {
            id: this.id,
            name: this.name,
            description: this.description, 
            closure: this.closure,
            archieved: this.archieved,
            openings: this.openings,
            phone: this.phone,
        }
    }
}
