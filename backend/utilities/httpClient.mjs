export const fetchDate = async(endpoint, params="")=>{
    const url = `${process.env.BASE_URL}/${endpoint}/${params}`;

    try{
        const response = await fetch(url);
        if(response.ok){
            const result = await response.json();
            return result;
        }else {
            throw new Error(`problem in fetching data ${endpoint}- ${response.statusText}`)
        }
    }catch(error){
        throw new Error(`problem in fetchin data ${endpoint} - ${response.statusText}`)
    }
}