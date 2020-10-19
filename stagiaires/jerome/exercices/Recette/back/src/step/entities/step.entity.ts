import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('step')
export class Step {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({type:"varchar",length:25})
    label:string;

    @Column()
    description:string;

    @ManyToMany(type=>Recipe,
        (recipes)=>recipes.steps)
    recipes:Recipe[];
}
