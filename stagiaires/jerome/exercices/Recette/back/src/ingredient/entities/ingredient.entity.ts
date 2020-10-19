import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('ingredient')
export class Ingredient {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;

    @Column({ nullable: true })
    kcal:number;

    @Column({ nullable: true })
    protein:number;

    @Column({ nullable: true })
    fat:number;

    @Column({ nullable: true })
    carb:number;

    @ManyToMany(type=>Recipe,
        (recipe)=>recipe.ingredients)
    recipes:Recipe[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
