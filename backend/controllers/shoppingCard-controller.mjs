import { fetchDate } from "../utilities/httpClient.mjs"
// import { ItemsModel } from "../models/ItemsModel.mjs"


export const listShoppingCard = async(req, res) => {

    
    try {
     
        const  url = `${process.env.BASE_URL}/shoppingCard`;
        const response = await fetch(url)
        const data =  await response.json();


            res.status(200).json({
                success : true,
                result : data,
            })
    return;
    }catch(error){
        res.status(500).json({success:false, message: error.message})
    }
}

// export const addShoppingCard = async(req, res)=>{
//    const{ id, name, price, stock, image, rating} = req.body ;
//    const newItem = {
//     id,name, price, stock, image, rating, quantity : 1,
//    }
   
//    try{
//    const data= await fetchDate("shoppingCard")
    
//     console.log(data);
//     data.push(newItem);
//     console.log(newItem);
    
    

//     }catch(error){
//         console.log(error);
        

//     }
// }
