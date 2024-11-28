import Header from "../Components/UI/Header"
import { useState, useEffect } from "react"

import { IDecoration } from "../Models/IDecoration"
import { LoadDecorations } from "../Utilities/LoadDecorations"
import ItemsList from "../Components/ItemsList"
//import { useParams } from "react-router-dom"

export const DecorationsPage = () => {
  const [decorations, setDecorations] = useState<IDecoration[]>([])
  // const {id} = useParams();

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

