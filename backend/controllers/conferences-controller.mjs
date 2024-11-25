import ItemsModel from "../models/ItemsModel.mjs";

export const listconferences = async(req, res)=>{
    const url =`${process.env.BASE_URL}/conferences`;
    const response = await fetch(url);
    try{
        const items=[];
        
        
        if(response.ok){
            
            const result = await response.json();
            console.log(result);
            result.map((item)=>{
                items.push(
                    new ItemsModel
                        (item.id, 
                        item.name, 
                        item.theme))

            });
            res.status(200).json({success: true, result: items})
            console.log(items);
            
            return;
        }
    }catch(error){
        res.status(500).json({success:false, message: error})
    }
}

export const findconferences = async(req, res)=>{
    const params = req.params.id;
    
    const url = `${process.env.BASE_URL}/conferences/${params}`;
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

