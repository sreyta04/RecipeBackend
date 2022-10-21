//database connection string
var mysql = require('mysql');

exports.dbConn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'Recipe',
    port:'3306',
    password: 'password',
   
});
