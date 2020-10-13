import { UserDto } from "./userDto";

export class User {
    constructor(public id: number,
        public first_name: string,
        public last_name: string,
        public login: string,
        public password: string,
        public birth_Day: Date


    ) {
    }
    toDto(): UserDto {
        return {
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            login: this.login,
            password: this.login,
            birth_day: this.birth_Day

        }
    }
    static fromBd(dtoResult: {
        id: number,
        first_name: string,
        last_name: string,
        login: string,
        password: string,
        birth_day: Date
    }): User {
        return new User(dtoResult.id,
            dtoResult.first_name,
            dtoResult.last_name,
            dtoResult.login,
            dtoResult.password,
            dtoResult.birth_day);
    }
}
