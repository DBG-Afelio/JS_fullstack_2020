import { UserDto } from './UserDto';

export class User {
    constructor(
        public id: number,
        public login: string,
        public password: string,
        public familyName?: string,
        public firstName?: string,
    ){}

    public toDto(): UserDto {
        return {
            id: this.id,
            login: this.login,
            _password: this.password,
            firstName: this.firstName,
            familyName: this.familyName,
        }
    }

    public static fromDto(userDto: UserDto): User {
        return new User(
            userDto.id,
            userDto.login,
            userDto._password,
            userDto.familyName,
            userDto.firstName
        )
    }

    
}