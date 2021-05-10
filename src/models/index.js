const { MongoClient } = require("mongodb");
const config = require("../config");

const uri = `mongodb://${config.DB_HOST}:${config.DB_PORT}`;
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    const db = await client.db(config.DB_NAME);
    console.log("Connected successfully to server");
    const pizzaCollection = db.collection("pizza");

    const pizzaDocuments = [
      { name: "Sicilian pizza", shape: "square" },
      { name: "New York pizza", shape: 100 },
      { demo: "Grandma pizza", shape: true },
    ];
    await pizzaCollection.insertMany(pizzaDocuments);
    console.log("Data inserted");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
