type ItemInfoProps = {
    name: string;
    style: string;
    price: number;
    stock: string;
    rating: number
  };
  
  const ItemInfo = ({ name, style, stock, price}: ItemInfoProps) => {
    return (
      <div className='card-body'>
        <h5>name is : {name} {stock} {price}</h5>
        <small className='text-muted'>style is {style}</small>
        
      </div>
    );
  };
  export default ItemInfo;