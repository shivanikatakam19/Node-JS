const express = require('express');
const path = require('path')

// initialize the express app
const app = express()
const PORT = 3000;

app.use(express.json())
// app.use(path, express.static(root, [options]));

app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.post('/', (req, res) => {
    const { name } = req.body;
    res.send(`Welcome ${name}`);
})

app.get('/hello', (req, res) => {
    res.status(200);
    res.send("Hello User!");
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);