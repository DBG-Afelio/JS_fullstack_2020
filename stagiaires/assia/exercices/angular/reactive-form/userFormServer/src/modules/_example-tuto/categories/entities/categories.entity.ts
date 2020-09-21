import { ProductsEntity } from "../../products/entities/products.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cat')
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({
    length: 10,
    unique: true,
  })
  name: string;

  @ManyToOne(
    type => ProductsEntity,
    (product) => product.cats,
    {
      cascade: ['insert', 'update'],
      nullable: true,
      eager: true // rapatrie auto les prod associes
    }
  )
  product: ProductsEntity;

}
