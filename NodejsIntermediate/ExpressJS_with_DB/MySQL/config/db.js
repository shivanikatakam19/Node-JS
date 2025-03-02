const mysql = require('mysql2');
const util = require('util');


// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',       // Host of the MySQL server (can be 'localhost' or an IP address)
    user: 'root',            // Your MySQL username
    password: 'Dinesh@0419',    // Your MySQL password
    database: 'todo-list'      // The database you want to connect to
});

connection.query = util.promisify(connection.query);

module.exports = connection;


