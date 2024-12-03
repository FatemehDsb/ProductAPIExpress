import axios from "axios";
import { IProductDetails } from "../Models/IProductDetails";

export const FindGift = async (endpoint : string) : Promise<IProductDetails> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log(endpoint);
  
  const url = `${baseUrl}${endpoint}`;
  console.log(url);
  
  const result = await axios.get(url);
  console.log(result.data.result);
  
return result.data.result;
}
