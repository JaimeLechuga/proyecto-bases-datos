const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'tuusuario', // Cambia por tu usuario de MySQL
    password: 'tucontra', // Cambia por tu contraseña de MySQL
    database: 'fajas_colombianas',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();