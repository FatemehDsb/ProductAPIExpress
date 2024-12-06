import axios from "axios";
import { IProduct } from "../Models/IProduct";


export const AddShoppingCard = async (item: IProduct) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/shoppingCard`;
   
  try {
    const response = await axios.post(url, item);
    console.log("Item added: ", response.data);
    return response.data;
  } catch(error){
    console.log("error adding item: ", error);
    throw error;
  }
}

