import { ProductsEntity } from "src/products/entity/products.entity";
import { UserEntity } from "src/users/entity/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class CategoriesEntity {
    @PrimaryGeneratedColumn()
    id : number ;
    @Column()
    name : string ;

    @OneToMany(
        type => ProductsEntity,
        (product)=> product.category ,
        {
            
            
        }
    )
    products : ProductsEntity;
}
