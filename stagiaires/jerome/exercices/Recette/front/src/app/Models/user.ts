import { GetUserDto } from "./Dtos/UserDto/get-user.dto";
import { RoleEnum } from "./enums/role.enum";

export class User {

    constructor(

        public name:string,
        public login:string,
        public password:string,
        public email:string,
        public role?:RoleEnum

    ){}

    static fromDto(userDto:GetUserDto):User{

        return new User(

            userDto.name,
            userDto.login,
            userDto.password,
            userDto.email

        )

    }
    toDto(){
        return{
            
            name:this.name,
            login:this.login,
            password:this.password,
            email:this.email

        }

    }

}
