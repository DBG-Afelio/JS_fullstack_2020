import { OrdersLineEntity } from "src/orders-line/entities/orders-line.entity";
import { UserEntity } from "src/users/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrdersEntity {

    @PrimaryGeneratedColumn()
    id : number ;
    
    @Column({
        length :50
    })

    name : string ; 
    @Column()
    date_of_order : Date ;
/*
    @ManyToOne(type => UserEntity ,
        (users)=> users.orders)
        @JoinColumn()
        users : UserEntity ; 
        */

    @OneToMany(type => OrdersLineEntity ,
        (orders_lines)=> orders_lines.orders)
       
        orders_line :OrdersLineEntity
    }
    
   
   
