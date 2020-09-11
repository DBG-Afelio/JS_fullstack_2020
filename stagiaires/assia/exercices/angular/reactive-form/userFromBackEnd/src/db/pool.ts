import { Pool } from 'pg';
import { config } from '../secret/db_config';

export const pool = new Pool(config);

