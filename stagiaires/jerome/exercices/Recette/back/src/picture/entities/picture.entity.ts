import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('picture')
export class Picture {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    src:string;

    @ManyToOne(type=>Recipe,
        (recipe)=>recipe.pictures)
    recipe:Recipe;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
