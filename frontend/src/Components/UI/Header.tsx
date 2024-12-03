import styles from './header.module.css';

const Header = ({title}:{title:string}) => {
  return (
    <h2 className={styles.title}>{title}</h2>
  )
}

export default Header