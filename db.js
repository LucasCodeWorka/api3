const { Pool } = require('pg');

const pool = new Pool({
  user: 'LucasCodeWorka',
  password: 'IO24VirZxBgc',
  host: 'ep-weathered-king-a59769hv.us-east-2.aws.neon.tech',
  port: '5432',
  database: 'liebe',
  ssl: {
    rejectUnauthorized: false,
    sslmode: 'require'
  }
});

module.exports = pool;
