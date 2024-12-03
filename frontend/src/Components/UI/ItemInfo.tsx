type ItemInfoProps = {
    name: string;
    style: string;
    price: number;
    stock: number;
    image: string;
    rating: number;
  
  };
  
  const ItemInfo = ({ name, style, price, stock, image, rating}: ItemInfoProps) => {
    return (
      <>
        <img  className="product-img" src={`/images/${image}.jpg`} alt={name} />
        <div className='card-body'>
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
          </div>
        </div>
      </>
    );
  };
  export default ItemInfo;