import { IProduct } from "../Models/IProduct";
import GridList  from "./GridList";

type ItemListProps = {
    items: IProduct[]
};

const ItemsList = ( {items} : ItemListProps)=>{
    return <GridList  items= {items}/>
}
export default ItemsList;