import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./event.entity";
import { IsNumber, IsString } from "class-validator";

@Entity()
export class AddInfos{

    @PrimaryGeneratedColumn()
    @IsNumber()
    id:number;

    @Column()
    @IsString()
    title:string;

    @Column()
    @IsString()
    description:string

    @ManyToOne(type => Event, event => event.contacts)
    event:Event

}