import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
}
