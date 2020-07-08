import { User } from './user';
import { Option } from './option';
import { Product } from './product';
import { CommandeDto } from './commandeDto';

export class Commande {
    date: Date;
    user: User;
    product: Product;
    options: Option[];

    constructor(
        public user_id:number,
        public product_id:number,
        public paye:boolean,
        public id:number,
        public option_ids: number[],
        date: string
    ) {
        this.paye = paye;
        this.id = id;
        this.option_ids = option_ids;
        this.date = new Date(date);
        this.user_id = user_id;
        this.product_id = product_id;
    }

    static fromDto(commandeDto: CommandeDto) {
        return new Commande(
            commandeDto.user_id,
            commandeDto.product_id,
            commandeDto.paye,
            commandeDto.id,
            commandeDto.option_ids,
            commandeDto.date
        );
    }

    toDto(): CommandeDto {
        return {
            user_id: this.user_id,
            product_id: this.product_id,
            option_ids: this.option_ids,
            paye: this.paye,
            id: this.id,
            date: this.date.toJSON()
        }
    }

    setProduct(product:Product):Commande {
        this.product = product;
        return this;
    }

    setUser(user:User):Commande {
        this.user = user;
        return this;
    }

    setOptions(options:Option[]):Commande {
        this.options = options;
        return this;
    }
}
