import { FiSearch, FiUser, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import styles from './styles/Headtop.module.css'
import logo from "../assets/logo.png";

let Headtop = () => {
  return(
    <div className={styles.headtop}>
      <div className={styles.leftside}>
        
          <img src={logo} alt="ShopCart Logo" className={styles.logo} />
        
        <div className={styles.searchbox}>
          <FiSearch className={styles.icon}/>
          <input type="Search" placeholder="Search products..."/>
        </div>
      </div>
      <div className={styles.rightside}>
        <div className={styles.cart}>
          <FiShoppingCart/>
          <span className={styles.badge}>3</span>
          </div>
          <div className={styles.profile}>
          <FiUser className={styles.pic}/> <FiChevronDown/>
        </div>
      </div>
    </div>
  )
}

export default Headtop;