type ItemInfoProps = {
    name: string;
    style: string;
  };
  
  const ItemInfo = ({ name, style }: ItemInfoProps) => {
    return (
      <div className='card-body'>
        <h5>name is : ${name}</h5>
        <small className='text-muted'>style is {style}</small>
      </div>
    );
  };
  export default ItemInfo;