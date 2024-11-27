import {DetailsModel, ItemsModel} from "../models/ItemsModel.mjs";
import { fetchDate } from "../utilities/httpClient.mjs";

export const listevents = async(req, res)=>{

    try{
        const result = await fetchDate (`events`);
        const items = [];
            result.map((item)=>{
                items.push(
                    new ItemsModel(
                        item.id,
                        item.name,
                        item.type
                    )
                )
            })
            res.status(200).json({success: true, result: items})
            return;
    }catch(error){
        res.status(500).json({success:false, message: error})
    }
}

export const findevents = async(req, res)=>{
    const params = req.params.id;
        try{
            const result = await fetchDate(`events/${params}`);
                const  item = new DetailsModel(
                    result.id,
                    result.name,
                    result.type,
                    result.location,
                    result.date,
                    result.registration_fee,
                )
                res.status(200).json({success: true, result: item})
                return;
        }catch(error){
            res.status(500).json({success:false, message: error})
        }
}