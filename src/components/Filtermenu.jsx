import styles from './styles/Filtermenu.module.css'


let Filter = () => {
  return(
    <>
    <div className={styles.heading}>
      <h3>Filter by</h3>
      <h5>Clear all</h5>
    </div>
      <h4 className={styles.Category}>Category</h4>
      <ul className={styles.menu}>
        <li><span>✔</span>All Catogories</li>
        <li><span>✔</span>Electronics</li>
        <li><span>✔</span>Clothing</li>
        <li><span>✔</span>Accessories</li>
        <li><span>✔</span>Home & Living</li>
      </ul>
      <h4 className={styles.Category}>Price Range</h4>
    </>
  )
}

export default Filter;