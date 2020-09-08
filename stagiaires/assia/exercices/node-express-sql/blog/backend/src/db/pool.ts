import { Pool } from 'pg';
import config from '../secret/db_config.json';

export const pool = new Pool(config);

