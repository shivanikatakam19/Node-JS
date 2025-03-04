const express = require('express');
const app = express();

// Use built-in middleware to parse JSON and serve static files
app.use(express.json());

const requestTime = function (req, res, next) {
    req.requestTime = new Date()
    next()
}

// Use custom middleware
app.use(requestTime);

// A sample route
app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
});

// Error-handling middleware (notice the extra error parameter)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
