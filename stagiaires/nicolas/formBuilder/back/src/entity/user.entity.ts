import { Exclude, Expose } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserEntity {

    @Expose()
    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar',{nullable:true,length:"30"})
    firstName?:string;

    @Column('varchar',{length:"30"})
    lastName:string;

    @Column()
    nationality:string;

    @Column()
    gender:string;


    @Column()
    birthdayDate:Date;

    @Column()
    password:string;

    @Column()
    login: string;

    @Exclude()
    @Column("date", { array: true,nullable:true })
    availabilities?: Date[];

}
