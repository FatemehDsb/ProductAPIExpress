import axios from "axios";
import { IDecoration } from "../Models/IDecoration";

export const LoadDecorations = async (endpoint: string): Promise <IDecoration[]> =>{
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/${endpoint}`;

  const results = await axios.get(url);
  return results?.data.result.data;
        
}