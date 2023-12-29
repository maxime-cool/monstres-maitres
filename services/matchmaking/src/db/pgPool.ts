import * as pg from 'pg';

const { Pool } = require('pg');

export const pool = new Pool({
  host: "berry.db.elephantsql.com",
  database: "vlewkoke",
  user: "vlewkoke",
  password: "mMhLStpDQAL8f7y_E5A7R_epBWtF1ag4", 
  port: 5432,
});