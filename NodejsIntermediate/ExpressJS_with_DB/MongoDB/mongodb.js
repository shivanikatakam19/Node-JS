const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = "mongodb://localhost:27017/"; // Replace with your MongoDB URI

async function connectToMongo() {

    const client = new MongoClient(uri);

    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        // Perform actions like fetching data or inserting data
        const database = client.db("blog-app"); // Specify the database name
        const collection = database.collection("users"); // Specify the collection name

        // Example: Find all documents in the 'users' collection
        const users = await collection.find().toArray();
        console.log(users);

    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    } finally {
        // Close the connection
        await client.close();
    }
}

connectToMongo();
