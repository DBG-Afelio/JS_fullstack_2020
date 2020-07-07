import { UserDto } from './user-dto';

export class User {

    constructor(public login:string,
                public password:string,
                public name:string,
                public surname:string,
                public credit:number,
                public formation:string,
                public isBanned:boolean,
                public isAdmin:boolean,
                public id:number){}

    static fromDto(userDto:UserDto):User{

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
    toDto():UserDto{

        return {

            "login": this.login,
            "password": this.password,
            "nom": this.name,
            "prenom": this.surname,
            "credit": this.credit,
            "formation": this.formation,
            "banni": this.isBanned,
            "admin": this.isAdmin,
            "id": this.id

        }

    }

}
