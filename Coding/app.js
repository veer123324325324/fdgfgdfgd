const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (e) {
    console.error("Error connecting to the database", e);
  } finally {
    await client.close();
  }
}

// Call the connectToDatabase function to establish the connection
connectToDatabase();
