
export const listconferences = async(req, res)=>{
    const url =`${process.env.BASE_URL}/conferences`;
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