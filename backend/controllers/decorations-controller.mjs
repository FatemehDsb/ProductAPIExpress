
import { ItemsModel } from "../models/ItemsModel.mjs";
import { fetchDate } from "../utilities/httpClient.mjs";

export const listdecorations = async(req, res)=>{
    try{
        const items=[];
        const result = await fetchDate(`decorations`);

            result.map((item)=>{
                items.push(
                    new ItemsModel(
                        item.id, 
                        item.name, 
                        item.style,
                        item.price,
                        item.stock,
                        item.description,
                        item.image,
                        item.rating,
                        "decoration"
                    ))
            });
            res.status(200).json({
                success: true,
                result: items })
            return;
    }catch(error){
        res.status(500).json({success:false, message: error})
    }
};

export const finddecorations = async(req, res)=>{
    const params = req.params.id;
    try{
      const result = await fetchDate(`decorations/${params}`)
            const item = new ItemsModel(
                result.id, 
                result.name, 
                result.style,
                result.price, 
                result.stock,
                result.description, 
                result.image,
                result.rating,
                 "decoration"
            )
       
            res.status(200).json({success: true, result: item})
            return;

    }catch(error){
        res.status(500).json({success:false, message: error})
    }
}
