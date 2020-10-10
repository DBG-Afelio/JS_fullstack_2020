import { SetUserDto } from './SetUserDto';
import { UserDto } from './UserDto';

export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public roles: string,
    public password? : string
  ) { }

  public toDto(): SetUserDto {
      return  {
          username: this.username,
          email: this.email,
          roles: this.roles,
          password: this.password
      }
  }

  public static fromDto(userDto: UserDto): User {
    return new User(
        userDto.id, 
        userDto.username,
        userDto.email,
        userDto.roles,
    );
  }
}
