
import { OrdersEntity } from "src/orders/entity/orders.entity";
import { RolesEntity } from "src/roles/entity/roles.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id : number ;
   
    @Column({
        length :50
    })
    first_name : string ;
    @Column({
        length :50
    })
    last_name : string ;
    @Column({
        length :50
    })
    login : string ; 
    @Column({
        length :100
    })
    password : string
    @Column()
    birth_day : Date ;
 /*
    @ManyToMany(type => RolesEntity , (roles)=> roles.users ,
        {
            cascade: true,
            eager : true 
        }) 
    @JoinTable()
    roles : RolesEntity[]
    */

   /*
    @OneToMany(type => OrdersEntity ,
        (orders)=> orders.users)
        orders :OrdersEntity ;
        */
    }

       
    


