import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
import { Comment } from './test-data-builder.js';

config();

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@testdatabase.evvfp8n.mongodb.net/?retryWrites=true&w=majority&appName=TestDatabase`;
export const comments = [];

async function listCollections() {
    const client = new MongoClient(uri);

    try {
        console.log("Connecting to MongoDB cluster...");
        // Connect to the MongoDB cluster
        await client.connect();

        console.log("Connected successfully to MongoDB.");

        // List databases to ensure connection is correct
        const adminDb = client.db().admin();
        const dbs = await adminDb.listDatabases();
        console.log("Databases:");
        dbs.databases.forEach(db => console.log(` - ${db.name}`));

        // Select the database
        const dbName = "sample_mflix";
        const db = client.db(dbName);

        // List collections to verify connection
        const collections = await db.listCollections().toArray();

        const collectionName = "comments";
        const collection = db.collection(collectionName);

        // Verify collection exists
        const collectionExists = collections.some(c => c.name === collectionName);
        if (!collectionExists) {
            console.error(`Collection '${collectionName}' does not exist in database '${dbName}'.`);
            return;
        }

        // Retrieve data from the collection
        const query = {};
        const options = {
            // Optional: limit the number of documents returned
            limit: 10,
        };
        const cursor = collection.find(query, options);

        // Store retrieved documents
        const results = await cursor.toArray();
        if (results.length > 0) {
            console.log(`Retrieved ${results.length} documents from the collection '${collectionName}':`);
            results.forEach(doc => {
                comments.push(new Comment.Builder()
                    .setId(doc._id)
                    .setName(doc.name)
                    .setEmail(doc.email)
                    .setMovieId(doc.movie_id)
                    .setText(doc.text)
                    .setDate(new Date(doc.date))
                    .build()
                );
        });
    } else {
        console.log(`No documents found in the collection '${collectionName}'.`);
    }
} catch (error) {
    console.error("Error connecting to MongoDB or retrieving data:", error);
} finally {
    // Close the connection
    await client.close();
    console.log("Connection closed.");
}
}

await listCollections().catch(console.error);