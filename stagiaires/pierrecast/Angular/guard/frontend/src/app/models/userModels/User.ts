import { UserDto } from './UserDto';

export class User {
  constructor(
    public id: number,
    public username: string,
    //public password,
  ) {
  }

  public toDto(): UserDto {
      return  {
          id: this.id,
          username: this.username,
          //password: this.password,
      }
  }

  public static fromDto(userDto: UserDto): User {
    return new User(
        userDto.id, 
        userDto.username,
        //userDto.password
    );
  }
}