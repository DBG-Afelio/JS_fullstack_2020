import { UserDto } from './UserDto';

export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
  ) { }

  public toDto(): UserDto {
      return  {
          id: this.id,
          username: this.username,
          email: this.email,
      }
  }

  public static fromDto(userDto: UserDto): User {
    return new User(
        userDto.id, 
        userDto.username,
        userDto.email,
    );
  }
}
