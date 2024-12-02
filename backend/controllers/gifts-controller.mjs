import {DetailsModel, ItemsModel} from "../models/ItemsModel.mjs";
import { fetchDate } from "../utilities/httpClient.mjs";

export const listgifts = async(req, res)=>{

    try{
        const result = await fetchDate (`gifts`);
        const items = [];
            result.map((item)=>{
                items.push(
                    new ItemsModel(
                        item.id,
                        item.name,
                        item.category, 
                        item.price,
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
                const  item = new DetailsModel(
                    result.id,
                    result.name,
                    result.price,
                    result.stock,
                    result.description,
                    result.rating,
                )
                res.status(200).json({success: true, result: item})
                return;
        }catch(error){
            res.status(500).json({success:false, message: error})
        }
}