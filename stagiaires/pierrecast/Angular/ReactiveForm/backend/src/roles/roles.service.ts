import { Injectable } from '@nestjs/common';
import { Role } from './models/role.model';
import { pool } from 'src/db/pool';
import { getCodeError } from 'src/users/users.service';

@Injectable()
export class RolesService {
    constructor() {

    }

    async findOne(id: string) : Promise<Role> {
        const rolesRows = await pool.query(`SELECT * FROM roles WHERE id = $1`, [id])
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const role = new Role(
            rolesRows.rows[0].id,
            rolesRows.rows[0].role
        );
        return role;
    }

    async findAll(): Promise<Role[]> 
    {
       const rolesRows = await pool.query(`SELECT * FROM roles`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const roles: Role[] = rolesRows.rows.map(
            (row: any) => new Role(
                row.id,
                row.role
            )
        );

        return roles;
    }

    /*async create(role: CreateRoleDto) : Promise<string> {
        const { role } = role;
        const value = await pool.query(`
            INSERT INTO roles (role)
            VALUES ($1)
            `,[role] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        console.log('Nationalité crée !');
        return 'Nationalité crée !';
    }

    async update(id: string, role: CreateRoleDto) : Promise<string> {
        const { role  } = role;
        const value = await pool.query(`
            UPDATE roles SET
            role = $1
        WHERE id = $2`,
            [role, id] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        return 'Nationalité modifiée !';
    }

    async delete(id: string): Promise<string> {
        const value = await pool.query(`
        DELETE FROM roles WHERE id = $1`, [+id] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
       
        return 'Role supprimé !';
    }
}

export function getCodeError(error: any) {
    if (error.code.startsWith('22')) {
        return 'FORMAT_INVALIDE';
    } else {
        return 'INDEFINI';
    }
}*/
}