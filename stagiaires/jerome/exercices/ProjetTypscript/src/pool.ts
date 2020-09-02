const { Pool } = require('pg');
import config from './secrets/db_config.json';
export const pool = new Pool(config);



