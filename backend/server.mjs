//steg1
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import decorationsRoutes from './routes/decorations-routes.mjs';
import giftsRoutes from './routes/gifts-routes.mjs'
import shoppingCardRoutes from './routes/shoppingCard-routes.mjs'



dotenv.config();

const PORT = process.env.PORT || 5001;
// const baseUrl= process.env.BASE_URL;



const app = express();


app.use(cors());
app.use('/api/decorations', decorationsRoutes);
app.use('/api/gifts', giftsRoutes);
app.use('/api/shoppingCard',shoppingCardRoutes);



app.listen(PORT, ()=>{
console.log(`Server är startad och lyssnar på port ${PORT}`);
})

//lektion 6 -2:59


