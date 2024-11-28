import { useEffect, useState } from "react"
import { IDecoration } from "../Models/IDecoration"
import { useParams } from "react-router-dom";
import { FindDecoration } from "../Utilities/FindDecoration";

export const DecorationPage = () => {
    const [decoration, setDecoration]=useState<IDecoration>();
    const {id} = useParams();

    useEffect(()=>{
        if (!id) return; 
        const getDecoration = async()=>{
            const found = await FindDecoration(`/decorations/${id}`)
            setDecoration(found);
        }
        getDecoration();
    
    }, [id]);

    
    return (
        <p>
         {decoration?.id}
        </p>
  )
}
