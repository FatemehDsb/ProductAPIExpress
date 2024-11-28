

import { IDecoration } from '../Models/IDecoration';
import { IGift } from '../Models/IGift';

import Card from './UI/Card';
import ItemInfo from './UI/ItemInfo';

type ItemProps = {
  item: IDecoration | IGift;
};

function isDecoration ( product :IDecoration | IGift) : product is IDecoration{
  return ( product as IDecoration).name !== undefined;
}

export const Item = ({ item }: ItemProps) => {
  //const img: string = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  if ( isDecoration(item)){
    const product = item as IDecoration;

  return (
   <Card>
    
        <ItemInfo
        name= {product.name}
        style={product.style}/>
    
   </Card>
  );
};



};