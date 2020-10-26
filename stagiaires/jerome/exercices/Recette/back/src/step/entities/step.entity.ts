import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('step')
export class Step {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    description:string;

    @ManyToOne(type=>Recipe,
        (recipes)=>recipes.steps)
    recipes:Recipe;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
