const express = require('express')
const path = require('path')
const cookiePaser = require("cookie-parser");
const connection = require('./config/db');

// intializing the express app
const app = express()

// setting the port to run
const port = 3000;

app.set('view engine', 'pug');
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());
app.use(express.json())

//routes
app.use('/todo', require('./routes/todo.route'))

app.get('/', (req, res) => {
    // Render the Pug template named 'home' and pass the data
    res.render('home');
});

app.get('/signup', (req, res) => {
    // Render the Pug template named 'add user'
    res.render('add-user');
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Display a message when the server starts successfully
    console.log(`Server is running at http://localhost:${port}`);
});
