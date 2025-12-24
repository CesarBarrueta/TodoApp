import { Pool } from 'pg';

const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'tododb',
  password: 'password',
  port: 5432,
});

export default pool;
