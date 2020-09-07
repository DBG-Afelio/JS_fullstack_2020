import { UserDto } from "./user-Dto";

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
    toDto(user:User):UserDto{

        return {

            id : user.id,
            nom : user.nom,
            prenom : user.prenom,
            bio:user.bio,
            adresse:user.adresse

        }

    }
}