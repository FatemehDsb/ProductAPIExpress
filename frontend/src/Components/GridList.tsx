//lektion 4- 3:36 
//lektion4- 3:41

import { IProduct } from '../Models/IProduct';

import styles from './gridlist.module.css';
import { Item } from './Item';


const GridList = ({ items }: { items: IProduct[] }) => { 
 console.log(items);
 
  return (
    <section className={styles.grid}>
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
}; 
export default GridList;
