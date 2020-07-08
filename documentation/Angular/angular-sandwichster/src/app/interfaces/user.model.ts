import { UserDto } from 'src/app/interfaces/userDto';

export class UserModel {

    constructor (
                public login: string,
                public password: string,
                public nom: string,
                public prenom: string,
                public credit: number,
                public formation: string,
                public banni: boolean,
                public admin: boolean,
                public id: number
                ) {}
    
    static fromDto(userDto: UserDto): UserModel {
        return new UserModel (
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

    toDto(): UserDto {
        let dto: UserDto;

        dto = {
            login: this.login,
            password: this.password,
            nom: this.nom,
            prenom: this.prenom,
            credit: this.credit,
            formation: this.formation,
            banni: this.banni,
            admin: this.admin,
            id: this.id
        }
        return dto;
    }

}