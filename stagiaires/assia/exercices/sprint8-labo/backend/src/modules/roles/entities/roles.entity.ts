import { RessourceEnum } from 'src/enum/ressource.enum';
import { MembersEntity } from 'src/modules/members/entities/members.entity';
import { PermissionsEntity } from 'src/modules/permissions/entities/permissions.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity(RessourceEnum.ROLES)
export class RolesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => PermissionsEntity,
    permission => permission.roles,
    {
      cascade: ['insert', 'update', 'remove'],
      eager: true,
    },
  )
  @JoinTable()
  permissions: PermissionsEntity[];

  @OneToMany(
    type => MembersEntity,
    member => member.role,
  )
  members: MembersEntity[];
}
