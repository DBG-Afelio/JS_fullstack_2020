import { UserDto } from "./dtos/userDto";

export class User {

    constructor(
       public id:number,
       public nom:string,
       public prenom:string,
       public bio:string,
       public adresse:string
    ){}

    static fromDto(userDto:UserDto):User{

        return new User(
            userDto.id,
            userDto.nom,
            userDto.prenom,
            userDto.bio,
            userDto.adresse
            )


    }
    toDto():UserDto{

        return {

            id : this.id,
            nom : this.nom,
            prenom : this.prenom,
            bio:this.bio,
            adresse:this.adresse

        }

    }
}