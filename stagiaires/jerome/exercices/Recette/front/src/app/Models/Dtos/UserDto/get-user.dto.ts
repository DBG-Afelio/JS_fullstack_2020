import {RoleEnum} from '../../enums/role.enum'

export class GetUserDto{
    
    id:number;
    name:string;
    login:string;
    password:string;
    role:RoleEnum;
    email:string;
}