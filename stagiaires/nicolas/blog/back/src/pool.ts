import { Pool } from "pg";
import * as config from "./secrets/db_config.json"

export const pool:Pool = new Pool(config);

