const express = require('express')
const path = require('path')
const cookiePaser = require("cookie-parser");
const connection = require('./config/db');
const session = require('express-session');

// intializing the express app
const app = express()

// setting the port to run
const port = 3000;

app.set('view engine', 'pug');
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());
app.use(express.json())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

//routes
app.use('/todo', require('./routes/todo.route'))

app.get("/", async (req, res) => {
    try {
        const [data] = await connection.query('SELECT * FROM todos');
        return res.render('home', { todos: data })
    } catch (error) {
        console.log(error)
        res.send({ success: false, message: 'Error while fetching the todos.' })
    }
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
