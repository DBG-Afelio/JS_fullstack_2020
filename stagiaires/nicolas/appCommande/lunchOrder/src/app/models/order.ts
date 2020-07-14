import { OrderDto } from './order-dto';
import { User } from './user';
import { Product } from './product';
import { OrderOption } from './order-option';


export class Order {

    user:User;
    product:Product;
    options:OrderOption[];
    totalPrice:number;

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
    setUser(user:User){

        this.user = user

    }
    setProduct(product:Product){

        this.product = product

    }
    setOptions(options:OrderOption[]){

        this.options = options

    }
    getSelectedOptions():OrderOption[]{

        return this.product.options.filter(option => this.optionsId.includes(option.id))

    }
    getTotalPriceOptions(){

        let totalPrice:number = 0;
        this.options.forEach(option => totalPrice += option.surcout);

        return totalPrice

    }
    setTotalPrice(){

        this.totalPrice = 0;
        this.totalPrice = this.product.price + this.getTotalPriceOptions();

    }

}
