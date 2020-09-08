import { Injectable } from '@nestjs/common';
import {pool} from '../pool'

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

    async createUser(){

        

    }

}
