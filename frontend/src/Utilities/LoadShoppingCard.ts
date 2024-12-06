// 
import axios from "axios";
import { IProduct } from "../Models/IProduct";

export const LoadShoppingCard = async (endpoint: string): Promise<IProduct[]> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/${endpoint}`;

  try {
    const results = await axios.get(url);
    console.log(results.data.result);
    return results?.data?.result || [];
  } catch (error) {
    console.error("Error loading shopping cart:", error);
    throw error;
  }
};
