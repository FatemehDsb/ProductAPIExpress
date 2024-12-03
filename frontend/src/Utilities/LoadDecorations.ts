import axios from "axios";
import { IProduct } from "../Models/IProduct";

export const LoadDecorations = async (endpoint: string): Promise <IProduct[]> =>{
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/${endpoint}`;

  const results = await axios.get(url);
  console.log(results.data.result);
  
  return results?.data.result;
        
}