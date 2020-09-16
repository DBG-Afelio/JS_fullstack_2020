import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('nationality')
export class NationalityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nationality: string;

    @OneToMany(
        type => UserEntity,
        (user) => user.nationality,
        {
            cascade: true,
            nullable: true
        }
    )
    users: UserEntity[];
}
