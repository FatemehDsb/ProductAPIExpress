import { IProductDetails } from "../Models/IProductDetails";
import AddComponent from "./AddShoppingCardComp";

type DetailsProp = {
    product: IProductDetails;

}


const ProductDetails = ({product} : DetailsProp) => {
  console.log("Rendering Product Details:", product);
  return (
   <section className="productDetail-body">
        <div >
            <img className="productDetail-image" src={`/images/${product?.image}.jpg`} alt={product?.name} />
        </div>
        <br />
            <h4>Product details </h4>
        <div className="details-info">
           <div className="details-NameStyle">
            <h2>{product?.name}</h2>
            <p>Style: {product?.style}</p>
           </div>
           <div className="details">
            <p>Price: {product?.price.toFixed(2)}</p>
            <p> Stock:{product?.stock}</p>
            <p>Rating: {product?.rating}/5</p>
            <p>Description: {product?.description}</p>
           </div>
           <div className="addBtn">
            <AddComponent/>
           </div>
        </div>
   </section>

  )
}

export default ProductDetails