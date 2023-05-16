import app from '../server';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config()
const MongoClient = mongodb.MongoClient


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
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})