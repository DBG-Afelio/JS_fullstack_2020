import { UserEntity } from "src/users/entity/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class RolesEntity {
    @PrimaryGeneratedColumn()
    id : number ;
    @Column({
        length :50
    })
    
    role : string ;
    /*
    @ManyToMany(type => UserEntity,users=> users.roles )
    users : UserEntity[] ;
    */
}
 