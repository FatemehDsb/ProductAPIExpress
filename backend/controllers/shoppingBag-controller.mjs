
export const listShoppingBag = async(req, res)=>{
    const url =`${process.env.BASE_URL}/shoppingBag`;
    const response = await fetch(url);
    try{
        const result = await response.json();
        if(response.ok){
            console.log(result);
            res.status(200).json({success: true, result: result})
            return;
        }
    }catch(error){
        res.status(500).json({success:false, message: error})
    }
}

export const findShoppingBag = async(req, res)=>{
    
    const params = req.params.id;
    
        const url = `${process.env.BASE_URL}/shoppingBag/${params}`;
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