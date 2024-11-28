import { IDecoration } from "../Models/IDecoration"
import { IGift } from "../Models/IGift"
import GridList  from "./GridList";

type ItemListProps = {
    items: IDecoration[] | IGift[]
};

const ItemsList = ( {items} : ItemListProps)=>{
    return <GridList  items= {items}/>
}
export default ItemsList;