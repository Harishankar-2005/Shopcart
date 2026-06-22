import styles from './styles/Headbottom.module.css'
import {FiChevronDown,FiGrid,FiMenu} from "react-icons/fi";


let Headbottom = () => {
  return(
    <div className={styles.headbottom}>
    <div className={styles.leftside}>
      <h2>All Products</h2>
      <p>Showing 1-10 of 32 results</p>
    </div>
    <div>
      <button className={`${styles.btn} ${styles.btneffect}`}>sort by popular <FiChevronDown/></button>
      <button className={`${styles.btn1} ${styles.btneffect} ${styles.btn2}`}
      style={{'--i':'5px 0px 0px 5px'}}><FiGrid/></button> 
      <button className={`${styles.btn1} ${styles.btneffect}`} style={{'--i':'0px 5px 5px 0px'}}><FiMenu/></button> 
    </div>
    </div>
  )
}

export default Headbottom;