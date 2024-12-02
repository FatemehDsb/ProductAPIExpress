import Header from "../Components/UI/Header"
import { useState, useEffect } from "react"


import  GridList  from "../Components/GridList"
import { LoadGifts } from "../Utilities/LoadGifts"
import { IProduct } from "../Models/IProduct"


export const GiftsPage = () => {
  const [gifts, setGifts] = useState<IProduct[]>([])

  useEffect(()=>{
    loadGifts();
  }, [])
  const loadGifts = async()=>{
 
    let result = [];
    const productList :IProduct[]=[];
    result = await LoadGifts ("gifts");
    console.log(result);
    

    result.map((item)=>{
      const {id, name, style, price, stock, rating,image, productType}: IProduct = item;
      const product : IProduct = {
        id,
        name,
        style,
        price, 
        stock,
        rating,
        image,
        productType :"gift"
      }

      productList.push(product)
      console.log(product);
      
    })

    // setDecorations(await LoadDecorations("decorations"));
    setGifts(productList);
  }
  return (
    <>
      <Header title="Popular gifts"/>
     <GridList items={gifts}/>
   </>

  )
}
