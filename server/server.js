import express from 'express';
import cors from 'cors';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

//TODO import routes file from routes

dotenv.config()
const MongoClient = mongodb.MongoClient

const app = express();
const PORT = process.env.PORT || 8000

// apply middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));

MongoClient.connect(
    process.env.BLEATR_DB_URI,
    {
        maxPoolSize: 50,
        writeConcern: {
            wtimeout: 3000
        },
    }
)
.catch(err => {
    console.error(err)
    process.exit(1)
})
.then(async client => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
})
