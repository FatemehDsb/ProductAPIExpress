import { NavLink } from "react-router-dom";
import AddComponent from "../AddShoppingCardComp";

type ItemInfoProps = {
    id:number;
    name: string;
    style: string;
    price: number;
    stock: number;
    image: string;
    rating: number;
    productType : string
  };
  
  const ItemInfo = ({ name,id , price, stock, image, rating, productType}: ItemInfoProps) => {
    console.log(`/${productType}s/${id}`);
    
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
                      <AddComponent/>
                  </div>
              </div>
          

      </NavLink>
      </>
    );
  };
  export default ItemInfo;