import styles from './styles/Card.module.css'
import {FiHeart} from "react-icons/fi";
import Cart from './Cart';

let Card = ({img,name,collection,rating,price,status,Add}) => {

  const bgcolor=status==="New" ? "rgb(5, 139, 5)" : "rgb(255, 60, 0)";

  let showPrice = (price,status) => {
    if(status!=="New" && status!==""){
      const discount = Number(status.replace("%", "").replace("-", ""));
      const discountPrice = price-(price*discount/100)
      return(
      <h2 style={{color:'orangered'}}>${discountPrice.toFixed(2)} <span >${price}</span></h2>
      );
    }else{
      return(<h2>${price}</h2>);
    };
  };


  let cardRating = (rating) => {
    if(rating <= 5){ 
      const stars = "⭐".repeat(Math.floor(rating));
      
      return (
        <div>
          <h3>{stars} ({rating})</h3>
        </div>
      );
    }else{
      const stars = "⭐⭐⭐⭐⭐"
      return (
        <div>
          <h3>{stars} ({rating})</h3>
        </div>
      )
    }
};
  return(
    <div className={styles.card}>
      <div className={styles.top}>
      <img src={img} alt="Headphone" />
      {status && (
      <button className={styles.btn} style={{backgroundColor:bgcolor}}>{status}</button>)}
      <button className={styles.heart}>
        <FiHeart size={14} />
      </button>
      </div>
      <div className={styles.bottom}>
        <h3>{name}</h3>
        <h4>{collection}</h4>
        <div>{cardRating(rating)}</div>
        {showPrice(price,status)}
      <Cart Add={Add}></Cart>
      </div>
    </div>
  )
}

export default Card;