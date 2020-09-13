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
        this.credit = credit !== undefined ? credit : 0;
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
            userDTO?.credit,
            userDTO?.banni,
            userDTO?.admin,
            userDTO?.id
        )
    }

    toDto(): UserDto {
        return {
            login:this.login,
            password:this.password,
            nom:this.nom,
            prenom:this.prenom,
            credit:this.credit,
            formation:this.formation,
            banni:this.banni,
            admin:this.admin,
            id:this.id
        }
    }

    updateFromDto(userDto):User {
        this.nom = userDto.nom;
        this.login = userDto.login;
        this.password = userDto.password;
        this.prenom = userDto.prenom;
        this.formation = userDto.formation;
        return this;
    }
    
    public get Id() : number {
        return this.id;
    }
    
}
