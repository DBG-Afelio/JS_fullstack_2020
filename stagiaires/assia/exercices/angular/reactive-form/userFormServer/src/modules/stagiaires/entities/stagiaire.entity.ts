import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { GenderEnum } from "src/enums/gender.enum";
import { RoleEntity } from "src/modules/roles/entities/role.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { NationalityEntity } from "./nationality.entity";

@Entity('student')
export class StagiaireEntity {

  @PrimaryGeneratedColumn()
  id:number;

  @Column({
    name: 'family name',
    length: 30,
    nullable: false,
  })
  familyName: string;

  @Column({
    name: 'first name',
    length: 30,
    nullable: false,
  })
  firstName: string;

  @Column({
    length: 50,
    nullable: false,
  })
  email: string;

  @ManyToOne(
    type => NationalityEntity,
    (nation) => nation.stagiaires,
    {
      nullable: false,
      cascade: ['insert', 'update'],
      eager: true,
    }
  )
  nation: NationalityEntity;

  @Column({
    nullable: false,
    enum: GenderEnum,
  })
  gender: string;

  @Column({
    name: 'date of birth',
    nullable: false,
  })
  dob: Date;

  @Exclude()
  @Column({
    name: 'password',
    length: 100,
    nullable: true,
  })
  pwd: string;

  @Column({
    unique: true,
    nullable: false,
    length: 10,
  })
  login: string;

  @Column({
    name: 'available from'
  })
  freeFrom: Date;

  @Column({
    name: 'available until'
  })
  freeUntil: Date;

  @ManyToMany(
    type => RoleEntity, (role) => role.stagiaires,
    {
      eager: true
    }
  )
  @JoinTable()
  roles: RoleEntity[];

  constructor(partial: Partial<StagiaireEntity>) {
    Object.assign(this, partial);
  }
}
