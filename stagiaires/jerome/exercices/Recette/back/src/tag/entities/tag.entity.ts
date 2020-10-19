import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('tag')
export class Tag {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({type:"varchar",length:25})
    label:string;

    @ManyToMany(type=>Recipe,
        (recipe)=>recipe.tags)
    recipes:Recipe[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
