import { useEffect, useState } from "react"
import { IProduct } from "../Models/IProduct"

import Header from "../Components/UI/Header"

import { LoadShoppingCard } from "../Utilities/LoadShoppingCard"
import ShoppingCardItemsList from "../Components/ShoppingCardItemsList"


export const ShoppingCardPage = () => {

  const [shoppingCard, setShoppingCard]= useState<IProduct[]>([])
  
  useEffect(()=>{
    loadShoppindCard();
  }, [])

  const loadShoppindCard = async()=>{
    const data= await LoadShoppingCard("shoppingCard")
    console.log("loaded shopping cart data", data);
    setShoppingCard(data);
  }
  
  return (
    <>
    <Header title="Your shopping card"/>
    <ShoppingCardItemsList items={shoppingCard} reloadCart={loadShoppindCard}
     />
</>
  )
}
