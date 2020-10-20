import { type } from 'os';
import { ActionEnum } from 'src/enum/action.enum';
import { RessourceEnum } from 'src/enum/ressource.enum';
import { RolesEntity } from 'src/modules/roles/entities/roles.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity(RessourceEnum.PERMISSIONS)
export class PermissionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: RessourceEnum,
  })
  ressource: RessourceEnum;

  @Column({
    type: 'enum',
    enum: ActionEnum,
  })
  action: ActionEnum;

  @Column({
    default: '*', //allow access to all attributes
  })
  attributes: string;

  @ManyToMany(
    type => RolesEntity,
    role => role.permissions,
    {
      nullable: true,
    },
  )
  roles: RolesEntity[];
}
