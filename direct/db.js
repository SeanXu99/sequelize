const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Aa04153071.',
    database: 'test',
})
    /usr/local/Cellar/mysql/8.0.18/bin/mysqld_safe
exports.mysqlConnection = connection;