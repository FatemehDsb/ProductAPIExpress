import { useEffect, useState } from "react"

import { useParams } from "react-router-dom";
import { FindGift } from "../Utilities/FindGift";
import { IProductDetails } from "../Models/IProductDetails";
import ProductDetails from "../Components/ProductDetails";

export const GiftPage = () => {
    const [gift, setGift]=useState<IProductDetails>();
    const {id} = useParams();

    useEffect(()=>{
        if (!id) return; 
        const getGift = async()=>{
            const found = await FindGift(`/gifts/${id}`)
            setGift(found);
        }
        getGift();
        console.log(gift);
    
    }, [id]);

    
    return (
        <ProductDetails product={gift!}/>
  )
}
