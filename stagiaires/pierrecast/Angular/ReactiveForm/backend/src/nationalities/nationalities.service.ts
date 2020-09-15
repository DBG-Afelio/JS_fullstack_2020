import { Injectable } from '@nestjs/common';
import { Nationality } from './models/nationality.model';
import { pool } from 'src/db/pool';
import { getCodeError } from '../../src/users/users.service';

@Injectable()
export class NationalitiesService {
    constructor() {

    }

    async findOne(id: string) : Promise<Nationality> {
        const nationalitiesRows = await pool.query(`SELECT * FROM nationalities WHERE id = $1`, [id])
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const nationality = new Nationality(
            nationalitiesRows.rows[0].id,
            nationalitiesRows.rows[0].nationality
        );
        return nationality;
    }

    async findAll(): Promise<Nationality[]> 
    {
       const nationalitiesRows = await pool.query(`SELECT * FROM nationalities`)
        .catch((error: Error) => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        const nationalities: Nationality[] = nationalitiesRows.rows.map(
            (row: any) => new Nationality(
                row.id,
                row.nationality
            )
        );

        return nationalities;
    }

    /*async create(nationality: CreateNationalityDto) : Promise<string> {
        const { nationality } = nationality;
        const value = await pool.query(`
            INSERT INTO nationalities (nationality)
            VALUES ($1)
            `,[nationality] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
        console.log('Nationalité crée !');
        return 'Nationalité crée !';
    }

    async update(id: string, nationality: CreateNationalityDto) : Promise<string> {
        const { nationality  } = nationality;
        const value = await pool.query(`
            UPDATE nationalities SET
            nationality = $1
        WHERE id = $2`,
            [nationality, id] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });

        return 'Nationalité modifiée !';
    }

    async delete(id: string): Promise<string> {
        const value = await pool.query(`
        DELETE FROM nationalities WHERE id = $1`, [+id] )
        .catch(error => {
            console.log(error);
            throw new Error(getCodeError(error));
        });
       
        return 'Nationality supprimé !';
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