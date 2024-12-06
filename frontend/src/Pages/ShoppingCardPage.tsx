import { useEffect, useState } from "react"
import { IProduct } from "../Models/IProduct"

import Header from "../Components/UI/Header"
import ShoppingCardItemsList from "../Components/ItemsList"
import { LoadShoppingCard } from "../Utilities/LoadShoppingCard"


export const ShoppingCardPage = () => {

  const [shoppingCard, setShoppingCard]= useState<IProduct[]>([])
  
  useEffect(()=>{
    loadShoppindCard();
  }, [])

  const loadShoppindCard = async()=>{
    setShoppingCard(await LoadShoppingCard("shoppingCard"))
  }
  
  return (
    <>
    <Header title="Your shopping card"/>
    <ShoppingCardItemsList items= {shoppingCard}/>
</>
  )
}
