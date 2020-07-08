import { User } from './user';
import { Option } from './option';
import { Product } from './product';

export class Commande {
    date: Date;
    user: User;
    product: Product;
    options: Option;
}
