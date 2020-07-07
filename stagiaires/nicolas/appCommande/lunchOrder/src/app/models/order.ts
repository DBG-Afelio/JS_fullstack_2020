import { OrderDto } from './order-dto';

export class Order {

    constructor(public userId:number,
                public productId:number,
                public optionsId:number[],
                public isPaid:boolean,
                public id:number,
                public date:Date){}

    static fromDto(orderDto:OrderDto):Order{

        return new Order(

            orderDto.user_id,
            orderDto.product_id,
            orderDto.option_ids,
            orderDto.paye,
            orderDto.id,
            new Date(orderDto.date)

        )

    }
    toDto():OrderDto{

        return {

            "user_id": this.userId,
            "product_id": this.productId,
            "option_ids": this.optionsId,
            "paye": this.isPaid,
            "id": this.id,
            "date": this.date.toDateString()
        
        }

    }
}
