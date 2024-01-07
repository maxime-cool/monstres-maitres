import * as pg from 'pg';

const { Pool } = require('pg');

// Replace these values with your PostgreSQL credentials
export const pool = new Pool({
  host: "flora.db.elephantsql.com",
  database: "udyqvkax",
  user: "udyqvkax",
  password: "xyUttWJh_P612tP-c3lWz6JJuVzz68Hy", 
  port: 5432,
});