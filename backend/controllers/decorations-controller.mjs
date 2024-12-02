
import {DetailsModel, ItemsModel } from "../models/ItemsModel.mjs";
import { fetchDate } from "../utilities/httpClient.mjs";

export const listdecorations = async(req, res)=>{
    try{
        const items=[];

    // let {query} = req.query;

    // try{
    //     if(query){
    //         const result = await searchProducts(query);
    //         res.status(200).json(result);
    //         return;
    //     }
        const result = await fetchDate(`decorations`);
        // const items=[];
        
            result.map((item)=>{
                items.push(
                    new ItemsModel
                        (item.id, 
                        item.name, 
                        item.style))
            });
            res.status(200).json({
                success: true,
                result: {
                    pageNo: result.page, 
                    totalPages: result.total_pages,
                    data:items
            }
        })
            return;
    }catch(error){
        res.status(500).json({success:false, message: error})
    }
};

export const finddecorations = async(req, res)=>{
    const params = req.params.id;
    try{
      const result = await fetchDate(`decorations/${params}`)
            const item = new DetailsModel(
                result.id, 
                result.name, 
                result.style,
                result.price, 
                result.stock, 
                result.rating
            )
       
            res.status(200).json({success: true, result: item})
            return;

    }catch(error){
        res.status(500).json({success:false, message: error})
    }
}

// const searchProducts = async (query)=> {
//     try{
//         const result = await fetchDate("search/decoration", query)
//         const items = [];

//         result.results.map((item)=>{
//             items.push(new ItemsModel(
//                 item.name,
//                 item.style,
//                 item.price,
//                 item.stock,
//                 item.rating
//             ))
//         });

//         return {
//             success: true,
//             result :{
//                 pageNo: result.page,
//                 totalPages: result.totalPages,
//                 data: items,
//             }
//         }
    
//     }catch(error){
//         throw new Error(error)
//     }
// }

 //post to api -lektion 6 3:37
 