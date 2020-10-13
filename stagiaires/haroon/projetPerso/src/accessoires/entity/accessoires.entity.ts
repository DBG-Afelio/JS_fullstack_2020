import { OrdersLineEntity } from "src/orders-line/entities/orders-line.entity";
import { OrdersLineController } from "src/orders-line/orders-line.controller";
import { ProductsEntity } from "src/products/entity/products.entity";
import { UserEntity } from "src/users/entity/user.entity";
import { UsersController } from "src/users/users.controller";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('accessoires')

export class AccessoiresEntity {
    
        @PrimaryGeneratedColumn()
        id: number ; 
        @Column({
            length :50
        })
        name : string ; 
        @ManyToMany(type => ProductsEntity , products=> products.accessoires )
        products : ProductsEntity[]

        @ManyToMany(type => OrdersLineEntity , orders_line=> orders_line.accrssoires )
        @JoinTable()
        orders_line : OrdersLineEntity[]
    }
