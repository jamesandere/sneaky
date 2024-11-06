require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  host: process.PGHOST,
  user: process.PGUSER,
  database: process.PGDATABASE,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
});

module.exports = pool;
