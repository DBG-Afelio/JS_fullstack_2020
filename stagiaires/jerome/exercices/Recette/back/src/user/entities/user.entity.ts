import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    login:string;

    @Column()
    password:string;

    @Column()
    salt:string;

    @Column()
    role:string;

    @OneToMany(type=>Recipe,
        (recipes)=>recipes.user)
    recipes:Recipe[];

    @JoinTable()
    @ManyToMany(type=>Recipe,
        (recipes)=>recipes.userLover,{
            eager:true
        })
    favoriteRecipes:Recipe[];
}
