//steg1
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from './routes/products-routes.mjs';

//steg2 
dotenv.config();

const PORT = process.env.PORT || 5001;
const baseUrl= process.env.BASE_URL;


//steg3
const app = express();

//steg4
app.use(cors());
app.use('/api/products', productRoutes);


//shopping bag -endpoint
// app.get(`/api/shoppingBag`, async (req, res)=>{
//     const url =`${baseUrl}/shoppingBag`;
//     const response = await fetch(url);
//     try{
//         const result = await response.json();
//         if(response.ok){
//             console.log(result);
//             res.status(200).json({success: true, result: result})
//             return;
//         }
//     }catch(error){
//         res.status(500).json({success:false, message: error})
//     }
// })

// app.get(`/api/shoppingBag/:id`, async(req, res)=>{
//     const params = req.params.id;
    
//     const url = `${baseUrl}/shoppingBag/${params}`;
//     try{
//         const response= await fetch(url);
//         if(response.ok){
//             const result = await response.json();
//             res.status(200).json({success: true, result: result})
//             return;
//         }

//     }catch(error){
//         res.status(500).json({success:false, message: error})
//     }
// })

//steg5

app.listen(PORT, ()=>{
console.log(`Server är startad och lyssnar på port ${PORT}`);
})



