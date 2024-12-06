import { IProduct } from "../Models/IProduct";
// import AddShoppingCardComp from "./AddShoppingCardComp";

type ItemsListProps = {
  items: IProduct[];
  reloadCart: () => void;
 
};

const ShoppingCardItemsList = ({ items, reloadCart }: ItemsListProps) => {

  
  return (
    <div className="items-list">
      {items.map((item) => (
        <div key={item.id} className="item">
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          {/* <AddShoppingCardComp item={item} reloadCart={reloadCart} /> */}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCardItemsList;
