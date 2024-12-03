import axios from "axios";
import { IProductDetails } from "../Models/IProductDetails";

export const FindDecoration = async (endpoint : string) : Promise<IProductDetails | null >=> {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log("Fetching endpoint:", endpoint);
  
  const url = `${baseUrl}${endpoint}`;
  console.log("Constructed URL:", url);
  
  try {
    const result = await axios.get(url);
    console.log("recieved Data:" , result.data.result);
        if(result.data?.result){
          return result.data.result;
        }else{
          console.log("unecpected API response structure", result.data);
          return null;
        }
  }catch(error){
      console.log("error is", error);
      return null;
      
  }
  }
