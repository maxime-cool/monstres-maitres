import * as pg from 'pg';

const { Pool } = require('pg');

// Replace these values with your PostgreSQL credentials
export const pool = new Pool({
  host: "castor.db.elephantsql.com",
  database: "xocabush",
  user: "xocabush",
  password: "F23f0X6yGgWWpyw3YFvMeksSKpTa2M2t", 
  port: 5432,
});