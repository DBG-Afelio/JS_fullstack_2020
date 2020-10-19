import { Ingredient } from "src/ingredient/entities/ingredient.entity";
import { Picture } from "src/picture/entities/picture.entity";
import { Step } from "src/step/entities/step.entity";
import { Tag } from "src/tag/entities/tag.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('recipe')
export class Recipe {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({type:"varchar",length:25})
    name:string;

    @Column()
    preparationTime:number;

    @Column()
    cookingTime:number;

    @Column()
    level:number;

    @Column()
    people:number;

    @Column()
    evaluation:number;

    @JoinColumn()
    @OneToMany(type=>Picture,
        (picture)=>picture.recipe,{
            eager:true
        })
    pictures:Picture[];

    @JoinTable()
    @ManyToMany(type=>Tag,
        (tag)=>tag.recipes,{
            eager:true
        })
    tags:Tag[];

    @JoinTable()
    @ManyToMany(type=>Step,
        (step)=>step.recipes,{
            eager:true
        })
    steps:Step[];

    @JoinColumn()
    @ManyToOne(type=>User,
        (user)=>user.recipes,{
            eager:true
        })
    user:User;

    @ManyToMany(type=>User,
            (User)=>User.favoriteRecipes)
    userLover:User[];

    @JoinTable()
    @ManyToMany(type=>Ingredient,
        (ingredient)=>ingredient.recipes,{
            eager:true
        })
    ingredients:Ingredient[];

    



}
