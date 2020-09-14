import { Injectable } from '@nestjs/common';
import {pool} from '../pool'
import { UsersDto } from './models/users-dto';

@Injectable()
export class UsersService {

    constructor(){}

    async getAllUsers(){

        const result = await pool.query('SELECT * from Users')

        return result.rows

    }

    async getUserById(userId:number){

        const result  = await pool.query('SELECT * FROM Users WHERE id = $1',[userId])
        return result.rows

    }

    async getUserByCountry(countryCode:string){

        const result  = await pool.query('SELECT * FROM Users WHERE nationality = $1',[countryCode])
        return result.rows

    }

    async createUser(user:UsersDto){
        console.log(user)

        // UserID ??? const resultEmail  = await pool.query('INSERT INTO Emails VALUES($1,$2)',[user.lastName,user.email])
        const resultUser  = await pool.query('INSERT INTO Users(lastName,nationality,gender,birthdayDate,password,login,availabilities,firstName) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',[user.lastName,user.nationality,user.gender,user.birthdayDate,user.password,user.login,user.availabilities,user.firstName])
 
        return [resultUser]

    }


}
