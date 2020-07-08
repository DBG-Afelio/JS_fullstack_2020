import { SupplierDto } from './supplierDto';

export class Supplier{
    constructor(    
        public id: number,
        public nom: string,
        public description: string,
        public ferme: boolean,
        public archive: boolean,
        public horaire: boolean[],
        public tel: string
        ){}

    static fromDto(supplierDto: SupplierDto): Supplier{ // static => méthode de classe et non d'instance (Math.random())
        return new Supplier(supplierDto.id, supplierDto.nom, supplierDto.description, supplierDto.ferme, supplierDto.archive, supplierDto.horaire, supplierDto.tel)
    }

    toDto(): SupplierDto{
        let dto: SupplierDto;
        dto = {
            id: this.id,
            nom: this.nom,
            description: this.description,
            ferme: this.ferme,
            archive: this.archive,
            horaire: this.horaire,
            tel: this.tel
        }
        return dto;
    }
}