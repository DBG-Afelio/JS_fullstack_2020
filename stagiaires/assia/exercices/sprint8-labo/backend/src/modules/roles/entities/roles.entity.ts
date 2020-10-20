import { MembersEntity } from "src/modules/members/entities/members.entity";
import { PermissionsEntity } from "src/modules/permissions/entities/permissions.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class RolesEntity { 
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(
    type => PermissionsEntity,
    (permission) => permission.roles,
    {
      cascade: ['insert', 'update', 'remove'],
      eager: true,
    },
  )
  @JoinTable()
  permissions: PermissionsEntity[];

  @OneToMany(
    type => MembersEntity,
    (member) => member.role,
  )
  members: MembersEntity[];
}
