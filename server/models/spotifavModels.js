const { Pool } = require('pg');
const keys = require('../keys');

const db_URI = keys.db_URI;

const pool = new Pool({
  connectionString: db_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('ran query:', text);
    return pool.query(text, params, callback);
  }
};