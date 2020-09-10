import { Pool } from 'pg';

export const pool = new Pool({
    "user": "node_user",
    "password": "postgres",
    "database": "Reactive",
    "host": "localhost",
    "port": 5432
});
