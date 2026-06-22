import {FiShoppingCart} from "react-icons/fi";
import Styles from './styles/Cart.module.css'


let Cart = ({Add}) => {
  return(
    <div className={Styles.cart} onClick={Add}>
      <FiShoppingCart/>
      <span>Add to Cart</span>
    </div>
)
}

export default Cart;