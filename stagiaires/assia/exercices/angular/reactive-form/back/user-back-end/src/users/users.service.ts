import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { pool } from 'src/db/pool';
import { throwError } from 'rxjs';
import { QueryResult, QueryResultRow } from 'pg';

@Injectable()
export class UsersService {

    async getUserList(): Promise<User[]> {
        let userList: User[];
        const queryResult: any = await pool.query(`SELECT * FROM users`)
            .catch(error => {
                userList = [];
                console.log('erreur Get');
                throwError(error);
                throw new Error('failed to retrieve UserList');
            });
        
        userList = queryResult.rows.map((row: QueryResultRow) => User.fromDbQuery(row));
        console.log(userList);
        return userList;
    }
}
