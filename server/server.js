import express from 'express';
import cors from 'cors';
// import routes file from routes

const app = express();

// apply middleware
app.use(cors());
app.use(express.json()); 

app.use('api/v1/bleats', bleats);
app.use('*', (req, res) => res.status(404).json({error: "not found"}));

export default app