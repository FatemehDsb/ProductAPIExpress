import axios from "axios";
import { IGift } from "../Models/IGift";

export const LoadGifts = async (endpoint: string): Promise <IGift[]> =>{
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/${endpoint}`;

  const results = await axios.get(url);
    
  return results.data;
        
        


}