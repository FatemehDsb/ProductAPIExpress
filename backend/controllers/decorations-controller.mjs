
import {DetailsModel, ItemsModel } from "../models/ItemsModel.mjs";
import { fetchDate } from "../utilities/httpClient.mjs";

export const listdecorations = async(req, res)=>{
    try{
        const items=[];

    
        const result = await fetchDate(`decorations`);

        
            result.map((item)=>{
                items.push(
                    new ItemsModel
                        (item.id, 
                        item.name, 
                        item.style,
                        item.price,
                        item.rating))
            });
            res.status(200).json({
                success: true,
                result: {
                    // pageNo: result.page, 
                    // totalPages: result.total_pages,
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
                result.rating,
                result.stock,
                result.description
            )
       
            res.status(200).json({success: true, result: item})
            return;

    }catch(error){
        res.status(500).json({success:false, message: error})
    }
}
