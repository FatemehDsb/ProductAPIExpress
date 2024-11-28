import Header from "../Components/UI/Header"
import { useState, useEffect } from "react"

import { IDecoration } from "../Models/IDecoration"
import  GridList  from "../Components/GridList"
import { LoadDecorations } from "../Utilities/LoadDecorations"
//import { useParams } from "react-router-dom"

const DecorationsPage = () => {
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
  
     <GridList items={decorations}/>
  </>

  )
}

export default DecorationsPage