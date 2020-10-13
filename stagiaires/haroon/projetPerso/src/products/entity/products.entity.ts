import { AccessoiresEntity } from "src/accessoires/entity/accessoires.entity";
import { CategoriesEntity } from "src/categories/entity/categories.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('produts')

export class ProductsEntity {

    @PrimaryGeneratedColumn()
    id : number ;
    @Column({
        length :50
    })
    name : string ;
    @Column({
        length :50
    })
    description : string ;
    @Column()
    price : number ;
    @ManyToOne( type => CategoriesEntity ,
        (category) => category.products ,
        {
            cascade: true,
            eager : true 
        })
        
@JoinColumn()
category : CategoriesEntity;
@ManyToMany(type => AccessoiresEntity , (accessoires)=> accessoires.products ,
{
    cascade: true,
    eager : true 
}) 
@JoinTable()
accessoires : AccessoiresEntity[]
}
