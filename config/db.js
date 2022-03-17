const Pool = require('pg').Pool

const pool = new Pool({
    user : 'pgtodos',
    host : 'localhost',
    database : 'myTodos_db',
    password : 'deknasa'
})

module.exports = pool