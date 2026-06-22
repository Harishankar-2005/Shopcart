import styles from './styles/Menu.module.css';
import Filter from './Filtermenu';
import Rating from './Rating';
import {FiHome,FiLayers,FiShoppingBag,FiPackage,FiHeart,FiMessageSquare,FiSettings} from "react-icons/fi";



let Menu = () => {
  return(
    <div className={styles.rightpage}>
      <ul className={styles.menu}>
        <li><FiHome className={styles.logo}/> Dashboard</li>
        <li><FiLayers className={styles.logo}/> Categories</li>
        <li><FiShoppingBag className={styles.logo}/> Product</li>
        <li><FiPackage className={styles.logo}/> Orders</li>
        <li><FiHeart className={styles.logo}/> Wishlist</li>
        <li><FiMessageSquare className={styles.logo}/> Messages</li>
        <li><FiSettings className={styles.logo}/> Settings</li>
      </ul>
      <Filter/>
      <Rating/>
      </div> 
      
  )
}

export default Menu;