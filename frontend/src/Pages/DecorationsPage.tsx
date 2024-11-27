import Header from "../Components/UI/Header"
import { useState, useEffect } from "react"

import { IDecoration } from "../Models/IDecoration"
import { GridList } from "../Components/GridList"
import { LoadDecorations } from "../Utilities/LoadDecorations"

const DecorationsPage = () => {
  const [decorations, setDecorations] = useState<IDecoration[]>([])
  useEffect(()=>{
    loadDecorations();
  }, [])
  const loadDecorations = async()=>{
    setDecorations(await LoadDecorations("decorations"));
  };
  return (
    <>
      <Header title="Popular decorations"/>
  
     <GridList decorations={decorations}/>
  </>

  )
}

export default DecorationsPage