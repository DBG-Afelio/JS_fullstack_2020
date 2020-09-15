import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './models/user.model';
import { CreateUserDto } from './dtos/create-user.dto';
import { pool } from 'src/db/pool';
import { UserComplete } from './models/userComplete.model';

@Injectable()
export class UsersService {
    constructor() {

    }

    async findOne(id: string) : Promise<User> {
        const usersRows = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const user = new User(
            usersRows.rows[0].id,
            usersRows.rows[0].nom,
            usersRows.rows[0].email,
            usersRows.rows[0].nation_id,
            usersRows.rows[0].sex,
            usersRows.rows[0].date_naissance,
            usersRows.rows[0].login,
            usersRows.rows[0].date_debut,
            usersRows.rows[0].date_fin,
            usersRows.rows[0].prenom
        );
        return user;
    }

    static mapUser = (row: any) => new User(
        row.id,
        row.nom,
        row.email,
        row.nation_id,
        row.sex,
        row.date_naissance,
        row.login,
        row.date_debut,
        row.date_fin,
        row.prenom
    )
    
    async findAll(): Promise<User[]> 
    {
       const usersRows = await pool.query(`SELECT * FROM users`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const users: User[] = usersRows.rows.map(
            UsersService.mapUser
        );

        return users;
    }


    async getUsersWithRoles(): Promise<UserComplete[]> 
    {
       const usersRows = await pool.query(`
            SELECT users.*, 
            ARRAY_AGG(roles.role) as roles, 
            ARRAY_AGG(roles.id) as ids, 
            nationalities.nationality as nationality FROM users 
            LEFT JOIN user_roles ON user_roles.user_id = users.id
            INNER JOIN roles ON user_roles.role_id = roles.id
            INNER JOIN nationalities ON users.nation_id = nationalities.id
            GROUP BY users.id, nationalities.nationality`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const users: UserComplete[] = usersRows.rows.map(
            (row: any) => new UserComplete(
                UsersService.mapUser(row),
                row.nationality,
                row.roles.filter(role => role !== null)
            )
        );

        return users;
    }

    async create(user: CreateUserDto) : Promise<string> {
        const { nom, email, nation_id, sex, date_naissance, login, password , date_debut, date_fin, prenom } = user;
        const value = await pool.query(`
            INSERT INTO users (nom, email, nation_id, sex, date_naissance, login, password, date_debut, date_fin, prenom)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            `,[nom, email, nation_id, sex, date_naissance, login, password , date_debut, date_fin, prenom] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        console.log('User crée !');
        return 'User crée !';
    }

    async update(id: string, user: CreateUserDto) : Promise<string> {
        const { nom, email, nation_id, sex, date_naissance, login, password, date_debut, date_fin, prenom  } = user;
        const value = await pool.query(`
            UPDATE users SET
            nom = $1,
            email = $2,
            nation_id = $3,
            sex  = $4,
            date_naissance = $5,
            login = $6,
            password = $7,
            date_debut = $8,
            date_fin = $9,
            prenom = $10
        WHERE id = $11`,
            [nom, email, nation_id, sex, date_naissance, login, password, date_debut, date_fin, prenom, id] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        return 'User modifié !';
    }

    async delete(id: string): Promise<string> {
        const value = await pool.query(`
        DELETE FROM users WHERE id = $1`, [+id] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
       
        return 'User supprimé !';
    }
}

export function getCodeError(error: any) {
    if (error.code.startsWith('22')) {
        return 'FORMAT_INVALIDE';
    } else {
        return 'INDEFINI';
    }
}