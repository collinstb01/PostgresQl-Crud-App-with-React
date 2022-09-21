const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "jayden38400",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
