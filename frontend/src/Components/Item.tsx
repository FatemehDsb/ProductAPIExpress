
import { IProduct } from '../Models/IProduct';
import Card from './UI/Card';
import ItemInfo from './UI/ItemInfo';

type ItemProps = {
  item: IProduct
};


export const Item = ({ item }: ItemProps) => {
  
    return (
        <Card>
              <ItemInfo
              name= {item.name}
              style={item.style}
              stock = {item.stock}
              price = {item.price}
              rating = {item.rating}
              image= {item.image}

              />
        </Card>
    );

};