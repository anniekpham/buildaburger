const { createConnection } = require('mysql2')

module.exports = createConnection({
  host: `${process.env.jawdb}`,
  port: null,
  user: `${process.env.db_acc}`,
  password: `${process.env.db_pw}`,
  database: 'burgers_db'
})
