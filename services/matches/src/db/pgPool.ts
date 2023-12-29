import * as pg from 'pg';

const { Pool } = require('pg');

// Replace these values with your PostgreSQL credentials
export const pool = new Pool({
  host: "berry.db.elephantsql.com",
  database: "sqrywktw",
  user: "sqrywktw",
  password: "r2wdW4XC2NoNhI-iPF7LQX2IkHPvJFN4", 
  port: 5432,
});