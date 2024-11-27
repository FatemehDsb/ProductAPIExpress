
import {DetailsModel, ItemsModel } from "../models/ItemsModel.mjs";
import { fetchDate } from "../utilities/httpClient.mjs";

export const listconferences = async(req, res)=>{
    try{
        const items=[];
        const result = await fetchDate(`conferences`);
        
            result.map((item)=>{
                items.push(
                    new ItemsModel
                        (item.id, 
                        item.name, 
                        item.theme))
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

export const findconferences = async(req, res)=>{
    const params = req.params.id;
    try{
      const result = await fetchDate(`conferences/${params}`)
            const item = new DetailsModel(
                result.id, 
                result.name, 
                result.theme,
                result.location, 
                result.date, 
                result.price
            )
       
            res.status(200).json({success: true, result: item})
            return;

    }catch(error){
        res.status(500).json({success:false, message: error})
    }
}

 //post to api -lektion 6 3:37
 