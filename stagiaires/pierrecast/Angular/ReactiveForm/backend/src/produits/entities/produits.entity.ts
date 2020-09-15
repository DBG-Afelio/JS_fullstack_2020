import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('produits')
export class ProduitsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    description: string;

    @Column()
    prix: number;

   /* @ManyToOne(
        type => UserEntity,
        (user) => user.produits,
        {
            cascade: true,
            nullable: true,
            eager: true
        }
    )
    user: UserEntity*/
}
