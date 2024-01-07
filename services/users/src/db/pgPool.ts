import * as pg from 'pg';

const { Pool } = require('pg');

export const pool = new Pool({
  host: "berry.db.elephantsql.com",
  database: "zfasyjrk",
  user: "zfasyjrk",
  password: "YwqKE2yGLJagnpQpzIgbQ9SlSIs8wNCm", 
  port: 5432,
});