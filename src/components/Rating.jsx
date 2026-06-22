import styles from './styles/Rating.module.css';


let Rating = () => {
   return(
    <>
          <h4 className={styles.Category}>Category</h4>
          <ul className={styles.menu}>
            <li><span>✔</span>⭐⭐⭐⭐⭐</li>
            <li><span>✔</span>⭐⭐⭐⭐& up</li>
            <li><span>✔</span>⭐⭐⭐ & up</li>
            <li><span>✔</span>⭐⭐ & up</li>
            <li><span>✔</span>⭐ & up</li>
          </ul>
    </>
   )
}

export default Rating;