import { UserDto } from './userDTO';

export class User {
    constructor(
        public login:string,
        public password:string,
        public nom: string,
        public prenom: string,
        public formation: string,
        public credit?: number,
        public banni?: boolean,
        public admin?: boolean,
        public id?: number
    ) {
        this.login = login;
        this.password = password;
        this.nom = nom;
        this.prenom = prenom;
        this.formation = formation;
        this.credit = credit !== undefined ? credit : 10;
        this.banni = banni ? banni : false;
        this.admin = admin ? admin : false;
        this.id = id ? id : 0;
    }

    static fromDto(userDTO: UserDto): User {
        return new User(
            userDTO.login,
            userDTO.password,
            userDTO.nom,
            userDTO.prenom,
            userDTO.formation,
            userDTO.credit,
            userDTO.banni,
            userDTO.admin,
            userDTO.id
        )
    }

    toDto(user:User): UserDto {
        return {
            login:user.login,
            password:user.password,
            nom:user.nom,
            prenom:user.prenom,
            credit:user.credit,
            formation:user.formation,
            banni:user.banni,
            admin:user.admin,
            id:user.id
        }
    }

    
    public get Id() : number {
        return this.id;
    }
    
}
