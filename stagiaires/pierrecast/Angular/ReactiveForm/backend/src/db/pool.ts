import { Pool } from 'pg';

export const pool = new Pool({
    "user": "node_user",
    "password": "postgres",
    "database": "ReactiveORM",
    "host": "localhost",
    "port": 5432
});
