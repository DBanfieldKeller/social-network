import express from 'express';
import cors from 'cors';
//TODO import routes file from routes

const app = express();
const PORT = process.env.PORT || 8000

// apply middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));

app.listen(PORT, ()=>{
    console.log(`Server running on port  ${PORT}`)
});
