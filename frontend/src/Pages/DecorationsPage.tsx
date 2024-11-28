import Header from "../Components/UI/Header"
import { useState, useEffect } from "react"

import { LoadDecorations } from "../Utilities/LoadDecorations"
import ItemsList from "../Components/ItemsList"
import { IProduct } from "../Models/IProduct"


export const DecorationsPage = () => {
  const [decorations, setDecorations] = useState<IProduct[]>([])


  useEffect(()=>{
    loadDecorations();
  }, [])
  const loadDecorations = async()=>{
    setDecorations(await LoadDecorations("decorations"));
  };
  return (
    <>
      <Header title="Popular decorations"/>
  
     {/* <GridList items={decorations}/> */}
      <ItemsList items= {decorations}/>
  </>

  )
}

