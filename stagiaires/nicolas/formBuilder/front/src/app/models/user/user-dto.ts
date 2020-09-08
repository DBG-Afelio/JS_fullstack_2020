export interface UserDto {

    id:number,
    lastName:string,
    email:string,
    nationality:string,
    gender:string,
    skills:string[],
    birthdayDate:Date,
    password:string,
    login:string,
    availabilities?:Date[],
    firstName?:string,

}
