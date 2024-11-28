
import { IProduct } from '../Models/IProduct';
import Card from './UI/Card';
import ItemInfo from './UI/ItemInfo';

type ItemProps = {
  item: IProduct
};

// function isDecoration ( product :ItemProps) : product is IDecoration{
//   return ( product as IDecoration).name !== undefined;
// }

export const Item = ({ item }: ItemProps) => {
  
    return (
        <Card>
              <ItemInfo
              name= {item.name}
              style={item.style}/>
        </Card>
    );

};