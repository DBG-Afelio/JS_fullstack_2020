import { OrderDto } from './orderDto'
import { UserModel } from './user.model';
import { Supplier } from './supplier';
import { Item } from './item';

export class Order {

    public user?: UserModel;
    public item?: Item;
    public supplier?: Supplier;

    constructor(
        public user_id: number,
        public product_id: number,
        public option_id: number[],
        public paye: boolean,
        public id: number,
        public date: string
    ){}

    static fromDto(orderDto: OrderDto): Order{
        return new Order(orderDto.user_id, orderDto.product_id, orderDto.option_id, orderDto.paye, orderDto.id, orderDto.date)
    }

    toDto(): OrderDto{
        let dto: OrderDto;
        dto = {
            user_id: this.user_id,
            product_id: this.product_id,
            option_id: this.option_id,
            paye: this.paye,
            id: this.id,
            date: this.date
        }
        return dto;
    }
}
