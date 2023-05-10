import express from "express";
import { MongoClient } from "mongodb";

const app = express()
const PORT = process.env.PORT || 3001;

// Connection string to local instance of MongoDB including database name
const connectionStringURI = `mongodb://127.0.0.1:27017/bleatrDB`;

let db;

MongoClient.connect(
    // Defines connection between app and MongoDB instance
    connectionStringURI,
    // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        // Use client.db() constructor to add new db instance
        db = client.db();
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}`);
        });
    }
);

