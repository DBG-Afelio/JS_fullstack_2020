import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ingredient')
export class IngredientEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        nullable:true
    })
    imgUrl: string;
    
    @Column({
        nullable:true
    })
    proteins: number;

    @Column({
        nullable:true
    })
    fats: number;

    @Column({
        nullable:true
    })
    carbs: number;

    @Column()
    approved: boolean;
}