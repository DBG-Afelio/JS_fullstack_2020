import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { pool } from 'src/db/pool';
import { throwError } from 'rxjs';
import { QueryResult, QueryResultRow } from 'pg';
import { promises } from 'dns';
import { CreateUser_Dto } from 'src/dtos/CreateUser_Dto';
import { UpdateUser_Dto } from 'src/dtos/UpdateUser_Dto';

@Injectable()
export class UsersService {

    async getAll(): Promise<User[]> {
        let userList: User[];
        const queryResult: QueryResult = await pool.query(`SELECT * FROM users ORDER BY id`)
            .catch(error => {
                userList = [];
                throw new NotFoundException('erreur Get');
            });
        
        userList = queryResult.rows.map((row: QueryResultRow) => User.fromQueryResultDb(row));
        console.log(userList);
        return userList;
    }

    async getById(id: number): Promise<User> {
        let user: User;
        const queryResult: QueryResult = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])
            .catch(error => {
                user = null;
                throw new NotFoundException('error GetById');
            });
        
        user = User.fromQueryResultDb(queryResult.rows[0]);
        console.log(`user id ${id} retrieved successfully : `, user);
        return user;
    }

    async getLastCreated(): Promise<User> {
        let user: User;
        const queryResult: QueryResult = await pool.query(`SELECT * FROM users ORDER BY id DESC LIMIT 1`)
            .catch(error => {
                user = null;
                throw new NotFoundException('error GetLastCreated');
            });
        
        user = User.fromQueryResultDb(queryResult.rows[0]);
        console.log(`user retrieved successfully : `, user);
        return user;
    }

    async create(newUser: CreateUser_Dto): Promise<User> {
        let user: User;
        const { familyName, firstName, email, nationId, gender, dob, pwd, login, freeFrom, freeUntil } = newUser;
        await pool.
            query(`
            INSERT INTO users 
            (familyname, firstname, email, nationality_id, gender, dateofbirth, passwd, login, availablefrom, availableuntil) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
                [familyName, firstName, email, nationId, gender, dob, pwd, login, freeFrom, freeUntil])
            .catch(error => {
                user = null;
                console.log(error);
                throw new NotFoundException('error createUser');
            });
        
        user = await this.getLastCreated();
        console.log(`user created successfully : `, user);
        return user;
    }

    async update(userToUp: UpdateUser_Dto): Promise<User> {
        let user: User;
        const { id, familyName, firstName, email, nationId, gender, dob, pwd, login, freeFrom, freeUntil } = userToUp;
        await pool.
            query(`
            UPDATE users SET 
            familyname = $1,
            firstname = $2,
            email = $3,
            nationality_id = $4,
            gender = $5,
            dateofbirth = $6,
            passwd = $7,
            login = $8,
            availablefrom = $9,
            availableuntil = $10
            WHERE id = $11 `,
                [familyName, firstName, email, nationId, gender, dob, pwd, login, freeFrom, freeUntil, id])
            .catch(error => {
                user = null;
                console.log(error);
                throw new NotFoundException('error updateUser');
            });
        
        user = await this.getById(userToUp.id);
        console.log(`user created successfully : `, user);
        return user;
    }

    async delete(id: number): Promise<boolean>{
        let deleteOk = true;
        await pool.query(`DELETE FROM users WHERE id = $1`, [id])
            .catch(error => {
                deleteOk = false;
                throw new NotFoundException('error deleteUser');
            });
        return deleteOk;
    }
}