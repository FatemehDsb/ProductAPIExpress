import { fetchDate } from "../utilities/httpClient.mjs"
// import { ItemsModel } from "../models/ItemsModel.mjs"

const shoppingCard = [];

export const listShoppingCard = async(req, res) => {
    
    const  url = `${process.env.BASE_URL}/shoppingCard`;
    const response = await fetch(url)
    const data =  await response.json();
    
    try {
        
            res.status(200).json({
                success : true,
                result : data,
            })
    return;
    }catch(error){
        res.status(500).json({success:false, message: error.message})
    }
}

export const addShoppingCard = async(req, res)=>{


   const{ id, name, price, stock, image, rating, productType} = req.body ;
   console.log("Received body:", req.body);
   
   if (!id || !name || !price || !stock || !image || !rating || !productType) {
       return res.status(400).json({ success: false, message: "Invalid data" });
    }
       const newItem = {
        id,name, price, stock, image, rating, quantity : 1,
       }

       try {
        // Mock data addition (or push to an in-memory array or database)
        shoppingCard.push(newItem);
    
        res.status(201).json({ success: true, result: newItem });
      } catch (error) {
        console.error("Error adding to shopping cart:", error);
        res.status(500).json({ success: false, message: error.message });
      }
 
 
    };
