import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StagiaireEntity } from "./stagiaire.entity";

@Entity('nationality')
export class NationalityEntity {

  @PrimaryGeneratedColumn()
  id:number;

  @Column({
    name: 'country name',
    length: 50,
    nullable: false,
    unique: true,
  })
  name: string;

  @OneToMany(
    type => StagiaireEntity,
    (stagiaire) => stagiaire.nation
  )
  stagiaires: StagiaireEntity[];
}
