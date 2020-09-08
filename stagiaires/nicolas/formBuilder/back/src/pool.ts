import {Pool} from 'pg';

export const  pool = new Pool({

    user:"postgres",
    password:"jujeniroso",
    database:"Users",
    port:5432,
    host:"localHost"

})