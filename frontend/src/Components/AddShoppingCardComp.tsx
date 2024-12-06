import { IProduct } from "../Models/IProduct";
import { AddShoppingCard } from "../Utilities/addShoppingCard";


const AddShoppingCardComp = ({item, reloadCart} : {item: IProduct ; reloadCart: ()=> void }) => {
  const handleAddToCard = async()=>{
    try{
      const addedItem = await AddShoppingCard(item);
      console.log("added to cart", addedItem);
      reloadCart();
      alert("item added")
    }catch(error){
      console.error("Failed:", error);
      alert("Failed");
    }
  }
  return (
    <>
    <button 
    onClick = {handleAddToCard}
    >Add to Shopping Cart</button>
    </>
  )
}

export default AddShoppingCardComp
