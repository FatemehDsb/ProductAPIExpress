//steg1
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import decorationsRoutes from './routes/decorations-routes.mjs';
import giftsRoutes from './routes/gifts-routes.mjs'


//steg2 
dotenv.config();

const PORT = process.env.PORT || 5001;
// const baseUrl= process.env.BASE_URL;


//steg3
const app = express();

//steg4
app.use(cors());
app.use('/api/decorations', decorationsRoutes);
app.use('/api/gifts', giftsRoutes);


app.listen(PORT, ()=>{
console.log(`Server är startad och lyssnar på port ${PORT}`);
})

//lektion 6 -2:59


