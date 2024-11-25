import ItemsModel from "../models/ItemsModel.mjs";

export const listevents = async(req, res)=>{
    const url =`${process.env.BASE_URL}/events`;
    try{
        const response = await fetch(url);
        const items = [];

        if(response.ok){
            const result = await response.json();
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
        }
    }catch(error){
        res.status(500).json({success:false, message: error})
    }
}

export const findevents = async(req, res)=>{
    
    const params = req.params.id;
    
        const url = `${process.env.BASE_URL}/events/${params}`;
        try{
            const response= await fetch(url);
            if(response.ok){
                const result = await response.json();
                res.status(200).json({success: true, result: result})
                return;
            }
    
        }catch(error){
            res.status(500).json({success:false, message: error})
        }
}