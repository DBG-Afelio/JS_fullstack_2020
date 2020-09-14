import { UserDto } from './user-dto';

export class User {

    constructor(

        public id:number,
        public lastName:string,
        public email:string,
        public nationality:string,
        public gender:string,
        public skills:string[],
        public birthdayDate:Date,
        public password:string,
        public login:string,
        public availabilities?:Date[],
        public firstName?:string,

    ){}

    static fromDto(userDto:UserDto):User{

        const newUser = new User(

            userDto.id,
            userDto.lastName,
            userDto.email,
            userDto.nationality,
            userDto.gender,
            userDto.skills,
            userDto.birthdayDate,
            userDto.password,
            userDto.login,

        );

        if(Object.values(User.getOptionalProperties(userDto)).some(value => value != null)){

            Object.keys(User.getOptionalProperties(userDto)).forEach(key => {

                if(User.getOptionalProperties(userDto)[`${key}`] != null){

                    userDto[`${key}`]=User.getOptionalProperties(userDto)[`${key}`]

                }

            })

        }

        return newUser

    }

    public toDto():UserDto{

        const newUserDto={

            id:this.id,
            lastName:this.lastName,
            email:this.email,
            nationality:this.nationality,
            gender:this.gender,
            skills:this.skills,
            birthdayDate:new Date(this.birthdayDate),
            password:this.password,
            login:this.login

        }
        if(Object.values(User.getOptionalProperties(this)).some(value => value != null)){

            Object.keys(User.getOptionalProperties(this)).forEach(key => {

                if(User.getOptionalProperties(this)[`${key}`] != null){

                    newUserDto[`${key}`]=User.getOptionalProperties(this)[`${key}`]

                }

            })

        }

        return newUserDto

    }

    static getOptionalProperties(user:User | UserDto):Object{

        return {

            availabilities:user.hasOwnProperty('availabilities')?user.availabilities:null,
            firstName:user.hasOwnProperty('firstName')?user.firstName:null

        }

    }


}
