import { OrderDto } from './orderDto'
import { UserModel } from './user.model';
import { Supplier } from './supplier';
import { Item } from './item';
import { find } from 'rxjs/operators';

export class Order {

    public user?: UserModel;
    public item?: Item;
    public totalPrice?: number;

    constructor(
        public user_id: number,
        public product_id: number,
        public option_ids: number[],
        public paye: boolean,
        public id: number,
        public date: string
    ){}

    static fromDto(orderDto: OrderDto): Order{
        return new Order(orderDto.user_id, orderDto.product_id, orderDto.option_ids, orderDto.paye, orderDto.id, orderDto.date)
    }

    toDto(): OrderDto{
        let dto: OrderDto;
        dto = {
            user_id: this.user_id,
            product_id: this.product_id,
            option_ids: this.option_ids,
            paye: this.paye,
            id: this.id,
            date: this.date
        }
        return dto;
    }

    getSelectedOptions(){
        if(this.item){
           return this.option_ids.map(id => this.item.options.find(option => option.id === id))
        }
        return [];
    }
}
