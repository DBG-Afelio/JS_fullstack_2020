const { Pool } = require('pg');
const config  = require('../secrets/db_config.json');
const pool = new Pool(config);

module.exports = pool;

