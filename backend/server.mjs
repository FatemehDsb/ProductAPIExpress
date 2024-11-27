//steg1
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import conferenceRoutes from './routes/conferences-routes.mjs';
import eventsRoutes from './routes/events-routes.mjs'


//steg2 
dotenv.config();

const PORT = process.env.PORT || 5001;
// const baseUrl= process.env.BASE_URL;


//steg3
const app = express();

//steg4
app.use(cors());
app.use('/api/conferences', conferenceRoutes);
app.use('/api/events', eventsRoutes);


app.listen(PORT, ()=>{
console.log(`Server är startad och lyssnar på port ${PORT}`);
})

//lektion 6 -2:59


