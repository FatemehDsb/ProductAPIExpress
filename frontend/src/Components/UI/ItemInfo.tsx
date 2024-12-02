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
      <div className='card-body'>
        <img  className="product-img" src={`/images/${image}.jpg`} alt={name} />
        <h5> {name} {style}</h5>
        <div>
          <p>{price}</p>
          <p>{stock}</p>
          <p>{rating}</p>
        </div>
        
        
      </div>
    );
  };
  export default ItemInfo;