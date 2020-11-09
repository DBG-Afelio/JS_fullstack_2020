import { type } from "os";
import { JobsEnum } from "src/enums/jobs.enum";
import { StagiaireEntity } from "src/modules/stagiaires/entities/stagiaire.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('role')
export class RoleEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: JobsEnum;

  @ManyToMany(
    type => StagiaireEntity,
    (stagiaire) => stagiaire.roles,
    {
      nullable: false,
    }
  )
  stagiaires: StagiaireEntity[];

}
