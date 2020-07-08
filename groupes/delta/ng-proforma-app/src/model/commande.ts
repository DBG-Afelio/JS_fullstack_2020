import { User } from './user';
import { Option } from './option';
import { Product } from './product';
import { CommandeDto } from './commandeDto';

export class Commande {
    date: Date;
    user: User;
    product: Product;
    options: Option[];

    constructor(public paye:boolean,
        public id:number,
        public option_ids: number[]
    ) {
        this.paye = paye;
        this.id = id;
        this.option_ids = option_ids;
    }

    static fromDto(commandeDto: CommandeDto) {
        return new Commande(commandeDto.paye,commandeDto.id,commandeDto.option_ids);
    }

    toDto(): CommandeDto {
        return {
            user_id: this.user.id,
            product_id: this.product.id,
            option_ids: this.option_ids,
            paye: this.paye,
            id: this.id,
            date: this.date.toJSON()
        }
    }

    setAll(date:Date,user:User,product:Product,options:Option[]):Commande {
        this.date = date;
        this.user = user;
        this.product = product;
        this.options = options;
        return this;
    }

    setDate(date:Date):Commande {
        this.date = date;
        return this;
    }

    setUser(user:User):Commande {
        this.user = user;
        return this;
    }
}
