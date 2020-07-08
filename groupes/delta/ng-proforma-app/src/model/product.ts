import { Fourn } from './fourn';
import { ProductDto } from './productDto';
import { Option } from './option';

export class Product {
    fournisseur: Fourn;
    public options:Option[];

    constructor(
        public id: number,
        public nom: string,
        public description:string,
        public prix:number,
        public fourn_id:number
    ) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.fourn_id = fourn_id;
    }

    static fromDto(productDto:ProductDto): Product {
        return new Product(
            productDto.id,
            productDto.nom,
            productDto.description,
            productDto.prix,
            productDto.fourn_id
        )
    }

    setFournisseur(fourn: Fourn):Product {
        this.fournisseur = fourn;
        return this;
    }

    setOptions(options: Option[]): Product {
        this.options = options;
        return this;
    }
}
