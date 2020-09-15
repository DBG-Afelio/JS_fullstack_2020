import { RoleService } from 'src/app/services/roleService/role.service';
import { Role } from '../roleModel/Role';
import { Sex } from './sex.enum';
import { UserDto } from './UserDto';

export class User {
  constructor(
    public id: number,
    public nom: string,
    public email: string,
    public nationality: string,
    public sex: Sex,
    public roles: Role[],
    public date_naissance: Date,
    public login: string,
    public date_debut: Date,
    public date_fin: Date,
    public prenom?: string
  ) {
  }

  public toDto(): UserDto {
      return  {
          id: this.id,
          nom: this.nom,
          email: this.email,
          nationality: this.nationality,
          sex: this.sex,
          roles: this.roles,
          date_naissance: this.date_naissance,
          login: this.login,
          date_debut: this.date_debut,
          date_fin: this.date_fin,
          prenom: this.prenom,
      }
  }

  public static fromDto(userDto: UserDto): User {
    return new User(
        userDto.id, 
        userDto.nom,
        userDto.email,
        userDto.nationality,
        userDto.sex,
        userDto.roles,
        userDto.date_naissance,
        userDto.login,
        userDto.date_debut,
        userDto.date_fin,
        userDto.prenom,
    );
  }
}