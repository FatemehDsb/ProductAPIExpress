import styles from "./navbar.module.css"
import { NavLink } from "react-router-dom";
 


const Navbar = () => {
  return (
    <>
    <header className={styles.navbar_div}>
        <nav className={styles.navbar}>
            <ul >
                <li className={styles.logo}>LOGO</li>
                <li className={styles.menu_item}>
                    <NavLink  to = "/">
                        Home
                    </NavLink>
                </li>
                
                <li className={styles.menu_item}>
                    <NavLink  to = "/decorations">
                        Decorations
                    </NavLink>
                </li>

                <li className={styles.menu_item}>
                    <NavLink className={styles.active_class} to = "/gifts">
                        Gifts
                    </NavLink>
                </li>
            </ul>
            
        </nav>
    </header>
    
    </>
  )
}
export default Navbar;
