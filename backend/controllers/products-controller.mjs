
export const listProducts = async(req, res)=>{
    const url =`${process.env.BASE_URL}/products`;
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

export const findProducts = async(req, res)=>{
    const params = req.params.id;
    
    const url = `${process.env.BASE_URL}/products/${params}`;
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