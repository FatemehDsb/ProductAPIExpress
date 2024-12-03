import { IProductDetails } from "../Models/IProductDetails";

type DetailsProp = {
    product: IProductDetails;

}


const ProductDetails = ({product} : DetailsProp) => {
  console.log("Rendering Product Details:", product);
  return (
   <section className="product-body">
        <div >
            <img className="product-image" src={`/images/${product?.image}.jpg`} alt={product?.name} />
        </div>
        <div className="details-info">
            <h2>{product?.name}</h2>
            <p>{product?.style}</p>
            <p>{product?.price.toFixed(2)}</p>
            <p>{product?.stock}</p>
            <p>{product?.rating}/5</p>
            <p>{product?.description}</p>
        </div>
   </section>

  )
}

export default ProductDetails