import { IUserDto } from './iuser-dto';

export class User {
    constructor(
        public login: string,
        public pwd: string,
        public familyName: string,
        public firstName: string,
        public credit: number,
        public course: string,
        public isBlocked: boolean,
        public isAdmin: boolean,
        public id: number
    ) { }

    static fromDto(userDto: IUserDto): User {
        return new User(
            userDto.login,
            userDto.password,
            userDto.nom,
            userDto.prenom,
            userDto.credit,
            userDto.formation,
            userDto.banni,
            userDto.admin,
            userDto.id
        )
    }

    public toDto(): IUserDto {
        return {
            login: this.login,
            password: this.pwd,
            nom: this.familyName,
            prenom: this.firstName,
            credit: this.credit,
            formation: this.course,
            banni: this.isBlocked,
            admin: this.isAdmin,
            id: this.id
        }
    }
}
