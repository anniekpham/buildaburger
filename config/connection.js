
const { createConnection } = require('mysql2')

module.exports = createConnection({
  host: 'localhost',
  port: null,
  user: 'root',
  password: `${process.env.db_pw}`,
  database: 'burgers_db'
})
