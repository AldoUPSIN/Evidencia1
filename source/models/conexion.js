const mysql = require("mysql");
const { promisify } = require('util');

var sqlConnecion = mysql.createConnection({
    host: 'database.cvavdhpnqh86.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'krnsh2001',
    port: "3306",
    database: 'databasee'
});

sqlConnecion.connect(function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Se conecto con exito");
    }

});

sqlConnecion.query = promisify(sqlConnecion.query)

module.exports = sqlConnecion;
