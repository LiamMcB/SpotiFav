const { Pool } = require('pg');

const db_URI = 'postgres://hbozgplt:FczAL3mN1qUA7kdB7u6DRAPxIT3j8q-y@lallah.db.elephantsql.com:5432/hbozgplt';

const pool = new Pool({
  connectionString: db_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('ran query:', text);
    return pool.query(text, params, callback);
  }
};