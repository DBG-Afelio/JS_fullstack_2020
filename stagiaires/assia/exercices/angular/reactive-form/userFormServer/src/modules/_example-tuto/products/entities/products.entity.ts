import { CategoriesEntity } from "../../categories/entities/categories.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        length: 50,
        update: false, //interdit l'update de ce champ 1x insere
    })
    name: string;

    @Column({
        length: 50,
    })
    description: string;

    @Column()
    price: number;

    @OneToMany(
      type => CategoriesEntity,
      (cat) => cat.product,
      {
        nullable: true,
        cascade: true
      }
    )
    cats: CategoriesEntity[];

}
