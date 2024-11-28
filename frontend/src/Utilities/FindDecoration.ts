import axios from "axios";
import { IDecoration } from "../Models/IDecoration"




export const FindDecoration = async (endpoint : string) : Promise<IDecoration> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}${endpoint}`;
  const result = await axios.get(url);

return result.data.result;
}
