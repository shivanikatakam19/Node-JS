const mongoose = require('mongoose');
const createUser = require('./schema')

// MongoDB connection URI
const uri = "mongodb://localhost:27017/blog-app"; // Replace with your MongoDB URI

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB using Mongoose");

        // create a new user using static data
        createUser()
    })
    .catch(err => {
        console.error("Error connecting to MongoDB using Mongoose", err);
    });
