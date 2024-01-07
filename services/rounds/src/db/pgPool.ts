import * as pg from 'pg';

const { Pool } = require('pg');

// Replace these values with your PostgreSQL credentials
export const pool = new Pool({
  host: "drona.db.elephantsql.com",
  database: "gzhzgqej",
  user: "gzhzgqej",
  password: "Rqwaa6gVp7WkLGwQfOkHXZampk10DwVI", 
  port: 5432,
});