const { createConnection } = require('mysql2')

// module.exports = createConnection({
//   host: `${process.env.JAWS_DB}`,
//   port: null,
//   user: `${process.env.db_acc}`,
//   password: `${process.env.db_pw}`,
//   database: 'burgers_db'
// })
let connection
if (process.env.JAWSDB_URL) {
  connection = createConnection(process.env.JAWSDB_URL)
} else {
  connection = createConnection({
    host: 'localhost',
    port: null,
    user: process.env.db_acc,
    password: process.env.db_pw,
    database: 'burgers_db'
  })
}

module.exports = connection