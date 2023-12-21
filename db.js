const { Pool } = require('pg');

const pool = new Pool({
  user: 'liebe_ro',
  host: 'dbexp.vcenter.com.br',
  database: 'liebe',
  password: '%eTS$33qPO8XZNMc',
  port: 20168
});

module.exports = pool;
