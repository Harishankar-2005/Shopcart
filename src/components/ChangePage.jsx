import styles from './styles/Changepage.module.css';
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


let Changepage = () => {
  return(
    <div className={styles.page}>
      <span><FiChevronLeft/></span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span><FiChevronRight/></span>
    </div>
  )
}

export default Changepage;