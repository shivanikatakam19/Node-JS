const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Example: Create a new user
const createUser = async () => {
    const newUser = new User({
        name: 'prakash Katakam',
        email: 'prakash@katakam.com',
        age: 30,
    });
    try {
        await newUser.save();
        console.log('User saved:', newUser);
    } catch (err) {
        console.error('Error saving user:', err);
    }
};

module.exports = createUser;
