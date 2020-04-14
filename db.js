const { Pool } = require('pg');
const localConnect = 'postgresql://postgres@localhost:5432/to_do';

const pool = new Pool({
  connectionString: localConnect,
});


module.exports = {
  query: (text, params) => pool.query(text, params),
};
