import Header from "../Components/UI/Header"
import { useState, useEffect } from "react"

import { IGift } from "../Models/IGift"
import  GridList  from "../Components/GridList"
import { LoadGifts } from "../Utilities/LoadGifts"
//import { useParams } from "react-router-dom"

const GiftsPage = () => {
  const [gifts, setGifts] = useState<IGift[]>([])
  // const {id} = useParams();

  useEffect(()=>{
    loadGifts();
  }, [])
  const loadGifts = async()=>{
    setGifts(await LoadGifts("gifts"));
  };
  return (
    <>
      <Header title="Popular decorations"/>
  
     <GridList items={gifts}/>
  </>

  )
}

export default GiftsPage;