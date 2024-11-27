

import { IDecoration } from '../Models/IDecoration';
import styles from './item.module.css';

export const Item = ({ decoration }: { decoration: IDecoration }) => {
  //const img: string = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <section className={styles.card}>
        <div className={styles['card-body']}>
            <h5>{decoration.name}</h5>
            <small className={styles['text-muted']}>{decoration.style}</small>
        </div>
    </section>
  );
};