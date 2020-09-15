import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SkillEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar',{length:"30"})
    name:Skills;


}
export enum Skills {

    'UX/UI', 'FRONT_DEV', 'BACK_DEV','INTEGRATOR'

}