//steg1
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from './routes/products-routes.mjs';
import shoppingBagRoutes from './routes/shoppingBag-routes.mjs'


//steg2 
dotenv.config();

const PORT = process.env.PORT || 5001;
const baseUrl= process.env.BASE_URL;


//steg3
const app = express();

//steg4
app.use(cors());
app.use('/api/products', productRoutes);
app.use('/api/shoppingBag', shoppingBagRoutes);


app.listen(PORT, ()=>{
console.log(`Server är startad och lyssnar på port ${PORT}`);
})



