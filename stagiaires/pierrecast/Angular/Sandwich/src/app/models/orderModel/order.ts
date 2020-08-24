import { IOrderDto } from './iorder-dto';
import { User } from '../userModel/user';

export class Order {

    constructor(
        public userId: number,
        public productId: number,
        public optionIds: number[],
        public isPayed: boolean,
        public id: number,
        public date: Date
    ) { }
    
    static fromDto(orderDto: IOrderDto): Order {
        return new Order(
            orderDto.user_id,
            orderDto.product_id,
            orderDto.option_ids,
            orderDto.paye,
            orderDto.id,
            new Date(orderDto.date)
        )
    }

    public toDto(): IOrderDto {
        return {
            user_id: this.userId,
            product_id: this.productId,
            option_ids: this.optionIds,
            paye: this.isPayed,
            id: this.id,
            date: this.date.toString()
        }
    }

}
