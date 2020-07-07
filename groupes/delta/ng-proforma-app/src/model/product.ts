import { Fourn } from './fourn';
import { ProductDto } from './productDto';

export class Product {
    fournisseur: Fourn;

    constructor(
        public id: number,
        public nom: string,
        public description:string,
        public prix:number,
        public options:{
            nom:string,
            surcout:number,
            id:number
        }[],
        public fourn_id:number
    ) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.options = options;
        this.fourn_id = fourn_id;
    }

    static fromDto(productDto:ProductDto): Product {
        return new Product(
            productDto.id,
            productDto.nom,
            productDto.description,
            productDto.prix,
            productDto.options,
            productDto.fourn_id
        )
    }

    setFournisseur(fourn: Fourn):Product {
        this.fournisseur = fourn;
        return this;
    }
}
