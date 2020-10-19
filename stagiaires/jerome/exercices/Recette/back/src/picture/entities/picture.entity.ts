import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('picture')
export class Picture {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    src:string;

    @ManyToOne(type=>Recipe,
        (recipe)=>recipe.pictures)
    recipe:Recipe;
}
