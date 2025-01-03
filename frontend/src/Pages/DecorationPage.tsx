import { useEffect, useState } from "react"

import { useParams } from "react-router-dom";
import { FindDecoration } from "../Utilities/FindDecoration";
import { IProductDetails } from "../Models/IProductDetails";
import ProductDetails from "../Components/ProductDetails";

export const DecorationPage = () => {
    const [decoration, setDecoration]=useState<IProductDetails>();
    const {id} = useParams();

    useEffect(()=>{
        if (!id) return; 

        const getDecoration = async()=>{
            const found = await FindDecoration(`/decorations/${id}`)
             console.log("Fetched decoration:", found);
            
             if (found) {
                setDecoration(found);
              }
        }
        getDecoration();
  
    
    }, [id]);

    if (!decoration) {
        return <p>Loading...</p>;
      }
      
    
    return (
       <ProductDetails product= {decoration!}/>
  )
}
