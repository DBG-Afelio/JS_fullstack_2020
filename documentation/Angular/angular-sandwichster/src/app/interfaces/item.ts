import { ItemDto } from './itemDto';

export class Item{
    constructor(    
        public nom: string,
        public description: string,
        public prix: number,
        public options: {id: number, nom: string, surcout: number}[],
        public fourn_id: number,
        public id: number,
        ){}

    static fromDto(itemDto: ItemDto): Item{ // static => méthode de classe et non d'instance (Math.random())
        return new Item(itemDto.nom, itemDto.description, itemDto.prix, itemDto.options, itemDto.fourn_id, itemDto.id)
    }

    toDto(): ItemDto{
        let dto: ItemDto;
        dto = {
            nom: this.nom,
            description: this.description,
            prix: this.prix,
            options: this.options,
            fourn_id: this.fourn_id,
            id: this.id
        }
        return dto;
    }
}