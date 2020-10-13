import { AccessoiresEntity } from "src/accessoires/entity/accessoires.entity";
import { OrdersEntity } from "src/orders/entity/orders.entity";
import { UserEntity } from "src/users/entity/user.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders_line')
export class OrdersLineEntity {

    @PrimaryGeneratedColumn()
    id : number ;

    @ManyToOne(type => OrdersEntity ,
        (orders)=> orders.orders_line)
        @JoinColumn()
        orders : OrdersEntity ; 

    @ManyToMany(type => AccessoiresEntity , accessoires=> accessoires.orders_line )
    @JoinTable()
    accrssoires : AccessoiresEntity[] ;
    

}
