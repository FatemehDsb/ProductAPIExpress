//lektion 4- 3:36 
//lektion4- 3:41

import { IDecoration } from '../Models/IDecoration';

import styles from './gridlist.module.css';
import { Item } from './Item';

export const GridList = ({ decorations }: { decorations: IDecoration[] }) => {
  return (
    <section className={styles.grid}>
      {decorations.map((decoration: IDecoration) => (
        <Item key={decoration.id} decoration={decoration} />
      ))}
    </section>
  );
};