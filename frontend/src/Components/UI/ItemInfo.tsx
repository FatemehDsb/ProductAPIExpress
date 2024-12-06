import { NavLink } from "react-router-dom";
import AddShoppingCardComp from "../AddShoppingCardComp";

type ItemInfoProps = {
    id:number;
    name: string;
    style: string;
    price: number;
    stock: number;
    image: string;
    rating: number;
    productType : "decoration" | "gift"
    reloadCart: () => void;
  };
  
  const ItemInfo = ({ name,id, style, price, stock, image, rating, productType}: ItemInfoProps) => {
    console.log(`/${productType}s/${id}`);
    const item = {id, name,style, price, stock, image, rating, productType}
    return (
      <>
      <NavLink  className='card-body' to = {`/${productType}s/${id}`}>
          <img  className="product-img" src={`/images/${image}.jpg`} alt={name} />

              <div className="product-title">
                <h4> {name}</h4>
                <p>{price} kr</p>
              </div>

              <div className="product-detail">
                  <p><span>
                    {stock} st availabe
                    </span>
                  </p>
                  <p>{rating}/5</p>

                  <div className="addBtn">
                    <AddShoppingCardComp item ={item} 
                     reloadCart={() => console.log("Reload cart function should be passed")} 
                     />
                  </div>
              </div>
          

      </NavLink>
      </>
    );
  };
  export default ItemInfo;