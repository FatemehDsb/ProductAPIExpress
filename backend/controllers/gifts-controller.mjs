import { ItemsModel} from "../models/ItemsModel.mjs";
import { fetchDate } from "../utilities/httpClient.mjs";

export const listgifts = async(req, res)=>{

    try{
        console.log("fetching gifts...");
        
        const items = [];
        const result = await fetchDate (`gifts`);
        console.log("fetched result", result);
        
            
        result.map((item)=>{
                items.push(
                    new ItemsModel(
                        item.id, 
                        item.name, 
                        item.category,
                        item.price,
                        item.stock,
                        item.description,
                        item.image,
                        item.rating
                    )
                )
            })
            res.status(200).json({success: true, result: items})
            return;
    }catch(error){
        res.status(500).json({success:false, message: error})
    }
}

export const findgifts = async(req, res)=>{
    const params = req.params.id;
        try{
            const result = await fetchDate(`gifts/${params}`);
                const  item = new ItemsModel(
                    result.id,
                    result.name,
                    result.category,
                    result.price,
                    result.stock,
                    result.description,
                    result.image,
                    result.rating
                )
                res.status(200).json({success: true, result: item})
                return;
        }catch(error){
            res.status(500).json({success:false, message: error})
        }
}