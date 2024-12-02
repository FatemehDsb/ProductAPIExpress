import { IProductDetails } from "../Models/IProductDetails";

type DetailsProp = {
    product: IProductDetails;

}


const ProductDetails = ({product} : DetailsProp) => {
  return (
   <>
   <section>
        <div className="product-image"></div>
        <div className="details-info">
            <h2>{product?.name}</h2>
            <p>{product?.style}</p>
            <p>{product?.stock}</p>
            <p>{product?.price}</p>
            <p>{product?.rating}</p>
            <p>{product?.description}</p>
            <img src={`/images/${product?.image}`} alt={product.name} />
        </div>
   </section>
   </>
  )
}

export default ProductDetails