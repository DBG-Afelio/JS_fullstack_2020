import { NationalityEntity } from "src/nationality/entities/nationality.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sex } from "./sex.enum";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
    })
    nom: string;

    @Column({
        length: 50,
    })
    prenom: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    sex: Sex;

    @Column()
    date_naissance: Date;


    @Column(
    )
    date_debut: Date;

    @Column()
    date_fin: Date;

    @Column({
        unique: true
    })
    login: string;

    @Column()
    password: string;


    @ManyToOne(
        type => NationalityEntity,
        (nationality) => nationality.users,
        {
            nullable: true,
            eager: true
        }
    )
    nationality: NationalityEntity;
}