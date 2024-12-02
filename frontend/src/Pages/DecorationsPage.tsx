import Header from "../Components/UI/Header"
import { useState, useEffect } from "react"

import { LoadDecorations } from "../Utilities/LoadDecorations"
import ItemsList from "../Components/ItemsList"
import { IProduct } from "../Models/IProduct"
// import Search from "../Components/UI/Search"


export const DecorationsPage = () => {
  const [decorations, setDecorations] = useState<IProduct[]>([])


  useEffect(()=>{
    loadDecorations();
  }, [])

//   const loadDecorations = async(searchCriteria: string)=>{
//     let result = [];
//     const productList :IProduct[]=[];

//     if(searchCriteria){
//       result = await LoadDecorations(`/decorations?query=${searchCriteria}`);
//     }else{

  

//     result = await LoadDecorations ("decorations");

//     result.map((item)=>{
//       const {id, name, style, price, stock, rating, productType}: IProduct = item;

//       const product : IProduct = {
//         id,
//         name,
//         style,
//         price, 
//         stock,
//         rating,
//         productType :"decoration"
//       }

//       productList.push(product)
//     })

//     // setDecorations(await LoadDecorations("decorations"));
//     setDecorations(productList);
//   };

//   const handleSearch = async (criteria: string)=>{
//     loadDecorations(criteria)
//   }
//   return (
//     <>
//       <Search onSearch={handleSearch} />
//       <Header title="Popular decorations"/>
//       <ItemsList items= {decorations}/>
//   </>

//   )
// }
const loadDecorations = async()=>{
  setDecorations(await LoadDecorations("decorations"));
};

return (
  <>
    <Header title="Popular decorations"/>
    <ItemsList items= {decorations}/>
</>

)
}

