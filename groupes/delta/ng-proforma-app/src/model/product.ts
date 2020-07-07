import { Fourn } from './fourn';

export class Product {

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
        public fourn_id:number,
        public fournisseur:Fourn
    ) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.options = options;
        this.fourn_id = fourn_id;
        this.fournisseur = fournisseur;
    }

}
